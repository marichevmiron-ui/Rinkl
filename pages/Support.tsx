import React, { useState, useEffect } from 'react';
import { database } from '../services/firebase';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface SupportProps {
  language: Language;
}

export const Support: React.FC<SupportProps> = ({ language }) => {
  const t = TRANSLATIONS[language].support;
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [reviews, setReviews] = useState<any[]>([]);
  const [isSending, setIsSending] = useState(false);
  
  // Persistent User ID logic
  const [userId] = useState(() => {
    let uid = localStorage.getItem('userId');
    if (!uid) {
      uid = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', uid);
    }
    return uid;
  });

  useEffect(() => {
    const feedbackRef = database.ref('feedback');
    const queryRef = feedbackRef.orderByChild('userId');
    
    const listener = queryRef.on('value', (snapshot) => {
      const feedbacks: any[] = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const feedback = childSnapshot.val();
          if (feedback.userId === userId) {
            feedbacks.push(feedback);
          }
        });
      }
      feedbacks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setReviews(feedbacks);
    });

    return () => {
        feedbackRef.off('value', listener);
    };
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !message) {
      setStatus({ type: 'error', msg: t.fillFields });
      return;
    }
    setIsSending(true);
    try {
      const feedbackRef = database.ref('feedback').push();
      await feedbackRef.set({
        id: feedbackRef.key,
        userId: userId,
        type: type,
        message: message,
        createdAt: new Date().toISOString(),
        status: 'new',
        adminResponse: null,
        respondedAt: null
      });
      setStatus({ type: 'success', msg: t.msgSent });
      setMessage('');
      setType('');
    } catch (error) {
      console.error('Error sending feedback:', error);
      setStatus({ type: 'error', msg: 'Error sending message. Please try again.' });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
    }
  };

  const typeOptions = [
    { val: 'feedback', label: t.types.feedback },
    { val: 'bug', label: t.types.bug },
    { val: 'question', label: t.types.question },
    { val: 'suggestion', label: t.types.suggestion },
    { val: 'other', label: t.types.other }
  ];

  return (
    <div className="flex-1 w-full max-w-2xl mx-auto p-4 md:p-6 pb-20 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">{t.title}</h2>

        {/* Input Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="type" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                        {t.messageType}
                    </label>
                    <div className="relative">
                        <select 
                            id="type" 
                            value={type} 
                            onChange={(e) => setType(e.target.value)} 
                            className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-rinklBlue dark:text-white transition-shadow"
                            required
                        >
                            <option value="" disabled>{t.selectTypePlaceholder}</option>
                            {typeOptions.map(opt => <option key={opt.val} value={opt.val}>{opt.label}</option>)}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                        {t.yourMessage}
                    </label>
                    <textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="..." 
                        className="w-full p-3 h-32 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-rinklBlue resize-none dark:text-white transition-shadow"
                        required
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full py-3 bg-rinklBlue hover:bg-blue-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex justify-center items-center gap-2"
                >
                    {isSending && (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    )}
                    {isSending ? t.sending : t.sendMessage}
                </button>
            </form>
        </div>
        
        {/* Notification Toast */}
        {status.msg && (
            <div className={`mb-6 p-4 rounded-lg text-center font-medium animate-fade-in border ${status.type === 'error' ? 'bg-red-50 border-red-100 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300' : 'bg-green-50 border-green-100 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300'}`}>
                {status.msg}
            </div>
        )}

        {/* Message History */}
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {t.myMessages}
                </h2>
                <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
            </div>

            {reviews.length === 0 ? (
                <div className="text-center py-12 text-gray-400 italic bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center">
                    <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    {t.noReviews}
                </div>
            ) : (
                reviews.map((feedback) => (
                    <div key={feedback.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden transition-all hover:shadow-md">
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${feedback.adminResponse ? 'bg-green-500' : 'bg-rinklBlue'}`}></div>
                        <div className="flex justify-between items-start mb-3">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-rinklBlue dark:text-blue-300 rounded-full text-xs font-medium">
                                {typeOptions.find(o => o.val === feedback.type)?.label || feedback.type}
                            </span>
                            <span className="text-xs text-gray-400 font-mono">
                                {new Date(feedback.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="text-gray-800 dark:text-gray-200 mb-4 whitespace-pre-wrap text-sm leading-relaxed">
                            {feedback.message}
                        </div>
                        
                        {feedback.adminResponse ? (
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/50">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px]">A</div>
                                    <div className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                                        {t.adminResponse}
                                    </div>
                                </div>
                                <div className="text-gray-700 dark:text-gray-300 text-sm pl-7">
                                    {feedback.adminResponse}
                                </div>
                                <div className="text-xs text-gray-400 mt-2 text-right">
                                    {new Date(feedback.respondedAt).toLocaleDateString()}
                                </div>
                            </div>
                        ) : (
                            <div className="text-xs text-gray-400 italic flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                {t.waitingResponse}
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    </div>
  );
};
