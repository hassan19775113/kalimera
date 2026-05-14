import SEO from '../components/SEO';
import { CONTACT_INFO } from '../utils/constants';

const Impressum = () => {
  return (
    <>
      <SEO
        title="Impressum"
        description="Impressum der Kalimera K&N GmbH - Gesetzliche Pflichtangaben gemäß § 5 TMG."
        path="/impressum"
      />

      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="font-semibold text-lg">{CONTACT_INFO.name}</p>
                <p>{CONTACT_INFO.address}</p>
                <p>
                  {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Kontakt
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p>
                  <strong>Fax:</strong> {CONTACT_INFO.fax}
                </p>
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p>
                  <strong>Internet:</strong>{' '}
                  <a
                    href={`https://${CONTACT_INFO.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    {CONTACT_INFO.website}
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Vertreten durch
              </h2>
              <p className="leading-relaxed">
                Geschäftsführer: [Name der Geschäftsführer]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Registereintrag
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Registergericht:</strong> [Registergericht]
                </p>
                <p>
                  <strong>Registernummer:</strong> [Registernummer]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p>[Name]</p>
                <p>{CONTACT_INFO.address}</p>
                <p>
                  {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Haftung für Inhalte
              </h2>
              <p className="leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Haftung für Links
              </h2>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Urheberrecht
              </h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-gray-600">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer" className="text-primary hover:underline">e-recht24.de</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impressum;
