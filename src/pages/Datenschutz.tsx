import SEO from '../components/SEO';
import { CONTACT_INFO } from '../utils/constants';

const Datenschutz = () => {
  return (
    <>
      <SEO
        title="Datenschutzerklärung"
        description="Datenschutzerklärung der Kalimera K&N GmbH. Informationen zum Umgang mit Ihren personenbezogenen Daten."
        path="/datenschutz"
      />

      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Allgemeine Hinweise
              </h3>
              <p className="leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Datenerfassung auf dieser Website
              </h3>
              <p className="leading-relaxed mb-3">
                <strong>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </strong>
              </p>
              <p className="leading-relaxed mb-3">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur Verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="leading-relaxed mb-3">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
              </p>
              <p className="leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                2. Hosting
              </h2>
              <p className="leading-relaxed">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                Cloudflare Pages
              </h3>
              <p className="leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v. a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Datenschutz
              </h3>
              <p className="leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="leading-relaxed mb-3">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold">{CONTACT_INFO.name}</p>
                <p>{CONTACT_INFO.address}</p>
                <p>
                  {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
                </p>
                <p className="mt-3">Telefon: {CONTACT_INFO.phone}</p>
                <p>E-Mail: {CONTACT_INFO.email}</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Speicherdauer
              </h3>
              <p className="leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                4. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kontaktformular
              </h3>
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Anfrage per E-Mail, Telefon oder Telefax
              </h3>
              <p className="leading-relaxed">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                5. Ihre Rechte
              </h2>
              <p className="leading-relaxed mb-4">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Auskunft über Ihre bei uns gespeicherten personenbezogenen
                  Daten zu erhalten
                </li>
                <li>
                  Berichtigung unrichtiger personenbezogener Daten zu verlangen
                </li>
                <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                <li>
                  Einschränkung der Datenverarbeitung zu verlangen, sofern wir
                  Ihre Daten noch nicht löschen dürfen
                </li>
                <li>
                  Widerspruch gegen die Verarbeitung Ihrer Daten bei uns
                  einzulegen
                </li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-gray-600">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datenschutz;
