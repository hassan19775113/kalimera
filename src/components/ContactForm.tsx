import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  date?: string;
  guests?: number;
  message: string;
  datenschutz: boolean;
}

interface ContactFormProps {
  isReservation?: boolean;
}

const ContactForm = ({ isReservation = false }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const keyMissing = !accessKey || accessKey.trim().length === 0;

  const onSubmit = async (data: ContactFormData) => {
    setError(false);
    setErrorMessage('');

    if (keyMissing) {
      console.error(
        '[ContactForm] VITE_WEB3FORMS_KEY ist nicht gesetzt. Hole dir einen Key auf https://web3forms.com/ und trage ihn in .env ein.'
      );
      setErrorMessage('Konfiguration unvollständig — bitte später erneut versuchen.');
      setError(true);
      return;
    }

    const payload: Record<string, string | number | undefined> = {
      access_key: accessKey,
      subject: isReservation
        ? `Neue Reservierung von ${data.name}`
        : `Neue Kontaktanfrage von ${data.name}`,
      from_name: isReservation ? 'Kalimera Reservierungs-Formular' : 'Kalimera Kontaktformular',
      Name: data.name,
      'E-Mail': data.email,
      Telefon: data.phone,
      Nachricht: data.message,
    };

    if (isReservation) {
      payload['Gewünschtes Datum'] = data.date || 'nicht angegeben';
      payload['Anzahl Personen'] = data.guests || 'nicht angegeben';
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        console.error('[ContactForm] Submit fehlgeschlagen:', {
          status: response.status,
          result,
        });
        setErrorMessage(result?.message || 'Bitte versuchen Sie es später erneut.');
        setError(true);
      }
    } catch (err) {
      console.error('[ContactForm] Netzwerk-Fehler beim Submit:', err);
      setErrorMessage('Netzwerkfehler — bitte prüfen Sie Ihre Verbindung.');
      setError(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center"
      >
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Vielen Dank!</h3>
        <p className="text-green-700">
          {isReservation
            ? 'Ihre Reservierungsanfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.'
            : 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.'}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Dev-Hinweis bei fehlendem Web3Forms-Key */}
      {keyMissing && import.meta.env.DEV && (
        <div className="bg-amber-50 border-2 border-amber-300 text-amber-900 rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <div className="text-sm">
            <strong className="block mb-0.5">Entwickler-Hinweis</strong>
            <code className="bg-amber-100 px-1.5 py-0.5 rounded">VITE_WEB3FORMS_KEY</code> fehlt in{' '}
            <code className="bg-amber-100 px-1.5 py-0.5 rounded">.env</code>. Hole dir einen Key auf{' '}
            <a
              href="https://web3forms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              web3forms.com
            </a>
            .
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
          {errorMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="flex items-center gap-2 text-sm font-display font-semibold text-primary mb-2">
          <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
          </svg>
          Name *
        </label>
        <input
          {...register('name', { required: 'Name ist erforderlich' })}
          type="text"
          id="name"
          className="w-full px-4 py-3 border-2 border-gold/30 hover:border-gold/60 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold focus:outline-none transition-all bg-white"
          placeholder="Ihr vollständiger Name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-display font-semibold text-primary mb-2">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            E-Mail *
          </label>
          <input
            {...register('email', {
              required: 'E-Mail ist erforderlich',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Ungültige E-Mail-Adresse',
              },
            })}
            type="email"
            id="email"
            className="w-full px-4 py-3 border-2 border-gold/30 hover:border-gold/60 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold focus:outline-none transition-all bg-white"
            placeholder="ihre.email@beispiel.de"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-display font-semibold text-primary mb-2">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Telefon *
          </label>
          <input
            {...register('phone', { required: 'Telefonnummer ist erforderlich' })}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border-2 border-gold/30 hover:border-gold/60 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold focus:outline-none transition-all bg-white"
            placeholder="+49 123 456789"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Reservation Fields */}
      {isReservation && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="flex items-center gap-2 text-sm font-display font-semibold text-primary mb-2">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              Gewünschtes Datum
            </label>
            <input
              {...register('date')}
              type="date"
              id="date"
              className="w-full px-4 py-3 border-2 border-gold/30 hover:border-gold/60 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold focus:outline-none transition-all bg-white"
            />
          </div>

          <div>
            <label htmlFor="guests" className="flex items-center gap-2 text-sm font-display font-semibold text-primary mb-2">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="10" r="2.5" />
                <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6M14 19c0-2.5 1.5-4.5 3-4.5s3 2 3 4.5" />
              </svg>
              Anzahl Personen
            </label>
            <input
              {...register('guests')}
              type="number"
              id="guests"
              min="1"
              className="w-full px-4 py-3 border-2 border-gold/30 hover:border-gold/60 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold focus:outline-none transition-all bg-white"
              placeholder="2"
            />
          </div>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="flex items-center gap-2 text-sm font-display font-semibold text-primary mb-2">
          <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Nachricht *
        </label>
        <textarea
          {...register('message', {
            required: 'Nachricht ist erforderlich',
            minLength: {
              value: 10,
              message: 'Nachricht muss mindestens 10 Zeichen lang sein',
            },
          })}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border-2 border-gold/30 hover:border-gold/60 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold focus:outline-none transition-all bg-white resize-none"
          placeholder={
            isReservation
              ? 'Besondere Wünsche oder Anmerkungen...'
              : 'Ihre Nachricht an uns...'
          }
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Datenschutz */}
      <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          {...register('datenschutz', { required: 'Bitte stimmen Sie der Datenschutzerklärung zu' })}
          className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0"
        />
        <span>
          Ich habe die{' '}
          <a
            href="/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </span>
      </label>
      {errors.datenschutz && (
        <p className="text-sm text-red-600 ml-7">{errors.datenschutz.message}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
              <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Wird gesendet …
          </>
        ) : isReservation ? (
          'Reservierung anfragen'
        ) : (
          'Nachricht senden'
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">* Pflichtfelder</p>
    </form>
  );
};

export default ContactForm;
