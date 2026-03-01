import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Unsubscribe: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        const emailParam = searchParams.get('email');
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [searchParams]);

    const handleUnsubscribe = async () => {
        if (!email) return;

        setStatus('loading');
        try {
            const res = await fetch('/api/unsubscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Failed to unsubscribe:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white pt-32">
            <div className="max-w-md w-full glass-card p-10 rounded-3xl border border-white/5 relative overflow-hidden text-center z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 -z-10"></div>

                {status === 'success' ? (
                    <div className="flex flex-col items-center gap-4">
                        <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-2" />
                        <h2 className="text-2xl font-black tracking-tight">Successfully Unsubscribed</h2>
                        <p className="text-slate-400 font-medium">
                            {email} has been removed from our mailing list. You will no longer receive marketing emails from us.
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-2xl font-black tracking-tight">Unsubscribe from Newsletter</h2>

                        {email ? (
                            <>
                                <p className="text-slate-400 font-medium">
                                    Are you sure you want to unsubscribe <strong className="text-white">{email}</strong> from the VTAC Manager newsletter?
                                </p>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 p-4 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl w-full">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <p className="text-sm font-medium text-left">We encountered an issue processing your request. Please try again.</p>
                                    </div>
                                )}

                                <button
                                    onClick={handleUnsubscribe}
                                    disabled={status === 'loading'}
                                    className="w-full relative px-8 py-3 rounded-xl bg-slate-800 text-white font-black overflow-hidden group hover:bg-slate-700 transition-colors border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                >
                                    {status === 'loading' ? (
                                        <span className="flex items-center justify-center gap-2 relative z-10">
                                            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                            Processing...
                                        </span>
                                    ) : (
                                        <span className="relative z-10">Confirm Unsubscribe</span>
                                    )}
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center gap-2 p-6 bg-slate-900/50 rounded-xl w-full border border-white/5">
                                <AlertCircle className="w-8 h-8 text-yellow-500 mb-2" />
                                <p className="text-slate-300 font-medium text-center">No email address provided.</p>
                                <p className="text-slate-500 text-sm text-center">We couldn't determine which email to unsubscribe. Please ensure you clicked the full link in your email.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Unsubscribe;
