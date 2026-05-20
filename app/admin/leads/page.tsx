'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, Trash2, User } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
  type: 'contact' | 'career';
  position?: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'contact' | 'career'>('all');

  useEffect(() => {
    // Load leads from localStorage
    const savedLeads = localStorage.getItem('vibgyor_leads');
    if (savedLeads) {
      try {
        const parsedLeads = JSON.parse(savedLeads);
        setLeads(parsedLeads);
      } catch (error) {
        console.error('Error parsing leads:', error);
      }
    }
    setLoading(false);
  }, []);

  const filteredLeads = leads.filter((lead) => {
    if (filter === 'all') return true;
    return lead.type === filter;
  });

  const deleteLead = (id: string) => {
    const updated = leads.filter((lead) => lead.id !== id);
    setLeads(updated);
    localStorage.setItem('vibgyor_leads', JSON.stringify(updated));
  };

  const exportAsCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Type', 'Position', 'Message', 'Submitted At'];
    const rows = filteredLeads.map((lead) => [
      lead.id,
      lead.name,
      lead.email,
      lead.phone,
      lead.type,
      lead.position || '-',
      lead.message.replace(/"/g, '""'),
      lead.submittedAt,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString()}.csv`;
    a.click();
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-black mb-4">Leads & Applications</h1>
          <p className="text-muted-foreground">
            Total: {filteredLeads.length} {filter !== 'all' ? filter : ''} submission(s)
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 font-bold uppercase text-sm transition-all ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-muted-foreground hover:border-primary'
            }`}
          >
            All ({leads.length})
          </button>
          <button
            onClick={() => setFilter('contact')}
            className={`px-6 py-2 font-bold uppercase text-sm transition-all ${
              filter === 'contact'
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-muted-foreground hover:border-primary'
            }`}
          >
            Leads ({leads.filter((l) => l.type === 'contact').length})
          </button>
          <button
            onClick={() => setFilter('career')}
            className={`px-6 py-2 font-bold uppercase text-sm transition-all ${
              filter === 'career'
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-muted-foreground hover:border-primary'
            }`}
          >
            Applications ({leads.filter((l) => l.type === 'career').length})
          </button>
          <button
            onClick={exportAsCSV}
            className="ml-auto px-6 py-2 font-bold uppercase text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Export CSV
          </button>
        </div>

        {filteredLeads.length === 0 ? (
          <div className="p-12 border border-border text-center">
            <p className="text-muted-foreground">No submissions yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Message
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Submitted
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="font-bold">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`mailto:${lead.email}`}
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`tel:${lead.phone}`}
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        {lead.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest ${
                          lead.type === 'contact'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-blue-500/10 text-blue-600'
                        }`}
                      >
                        {lead.type === 'contact' ? 'Lead' : 'Career'}
                        {lead.position && ` - ${lead.position}`}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">{lead.message}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(lead.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="p-2 hover:bg-red-500/10 transition-colors rounded"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
