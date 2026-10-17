import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mt-12 mb-3">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-muted">{children}</p>;
}
function UL({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 mb-3 text-muted space-y-1">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
const link = "underline hover:text-accent";

export default function Datenschutz() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" />
      <section className="section">
        <div className="container-x max-w-3xl leading-7">
          <p className="text-sm text-muted mb-6">Stand: September 2026</p>

          <H>1. Allgemeine Hinweise</H>
          <P>
            Wir freuen uns über Ihren Besuch auf der Website der IRB Metallbau GmbH & Co. KG. Der Schutz Ihrer
            personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, welche
            personenbezogenen Daten beim Besuch dieser Website und bei der Kontaktaufnahme verarbeitet werden.
          </P>
          <P>
            Diese Website setzt keine Cookies, keine Analyse- oder Tracking-Werkzeuge und keine Werbedienste ein. Inhalte
            von Drittanbietern (Google Maps) werden nur nach Ihrer ausdrücklichen Zustimmung nachgeladen.
          </P>

          <H>2. Verantwortlicher</H>
          <P>
            IRB Metallbau GmbH & Co. KG
            <br />
            Südring 1
            <br />
            17509 Lubmin
            <br />
            Deutschland
            <br />
            Telefon: +49 38354 389967
            <br />
            E-Mail: <a className={link} href="mailto:info@irb-metallbau.de">info@irb-metallbau.de</a>
            <br />
            Website: www.irb-metallbau.de
          </P>

          <H>3. Datenschutzbeauftragter</H>
          <P>
            Frank Seifert
            <br />
            ASD ArbeitsSicherheitsDienst GmbH
            <br />
            Steinbeckerstraße 1
            <br />
            17489 Greifswald
            <br />
            Telefon: +49 (38 34) 777 58 18
            <br />
            E-Mail:{" "}
            <a className={link} href="mailto:datenschutzbeauftragter@asd-seifert.de">
              datenschutzbeauftragter@asd-seifert.de
            </a>
          </P>

          <H>4. Hosting bei Vercel und Server-Logfiles</H>
          <P>
            Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA („Vercel")
            gehostet. Beim Aufruf der Website werden Ihre Anfragen über das weltweite Auslieferungsnetzwerk (CDN) von
            Vercel verarbeitet. Dabei werden technisch notwendig folgende Daten verarbeitet und in Server-Logfiles
            kurzzeitig gespeichert:
          </P>
          <UL
            items={[
              "IP-Adresse des anfragenden Geräts",
              "Datum und Uhrzeit des Zugriffs",
              "aufgerufene Seite bzw. Datei (URL)",
              "übertragene Datenmenge und HTTP-Statuscode",
              "Referrer-URL (zuvor besuchte Seite), sofern vom Browser übermittelt",
              "Browsertyp und -version, Betriebssystem (User-Agent)",
            ]}
          />
          <P>
            Die Verarbeitung ist erforderlich, um die Website auszuliefern, ihre Stabilität und Sicherheit zu
            gewährleisten und Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an einem sicheren und effizienten Betrieb der Website). Eine Zusammenführung mit anderen
            Datenquellen oder eine Auswertung zu Marketingzwecken durch uns findet nicht statt.
          </P>
          <P>
            Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Da Vercel seinen Sitz in den USA
            hat, kann es zu einer Übermittlung von Daten in die USA kommen. Vercel ist nach dem EU-US Data Privacy
            Framework zertifiziert, für das die Europäische Kommission ein angemessenes Datenschutzniveau festgestellt
            hat (Art. 45 DSGVO). Ergänzend werden Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c
            DSGVO) eingesetzt. Weitere Informationen:{" "}
            <a className={link} href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              vercel.com/legal/privacy-policy
            </a>
            .
          </P>

          <H>5. Cookies und Endgerätezugriff</H>
          <P>
            Wir setzen auf dieser Website keine Cookies und speichern keine Informationen in Ihrem Endgerät, die über
            den technisch notwendigen Abruf der Seiten hinausgehen. Ein Cookie-Banner ist daher nicht erforderlich
            (§ 25 TDDDG). Eine Ausnahme bildet die auf Wunsch geladene Google-Karte (siehe Abschnitt 9).
          </P>

          <H>6. Schriftarten und Medien</H>
          <P>
            Die verwendeten Schriftarten (Oswald und Public Sans) sowie alle Bilder werden von unserem eigenen
            Webspace ausgeliefert. Es findet keine Verbindung zu Servern von Google Fonts oder anderen Schriftanbietern
            statt.
          </P>

          <H>7. Kontaktaufnahme</H>
          <P>
            Wenn Sie uns per E-Mail, Telefon oder über das Bewerbungsformular kontaktieren, verarbeiten wir die von Ihnen
            mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen und Vertragsdurchführung) bzw.
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Wir geben diese Daten
            nicht ohne Ihre Einwilligung an Dritte weiter. Sie werden gelöscht, sobald die Anfrage abschließend bearbeitet
            ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </P>
          <P>
            <strong>Hinweis zum Bewerbungsformular:</strong> Das Formular sendet Ihre Eingaben nicht an einen Server dieser
            Website. Stattdessen wird Ihr eigenes E-Mail-Programm mit einer vorausgefüllten Nachricht an{" "}
            <a className={link} href="mailto:info@irb-metallbau.de">info@irb-metallbau.de</a> geöffnet. Erst wenn Sie die
            E-Mail dort absenden, werden die Daten über Ihren E-Mail-Anbieter übertragen. E-Mails können auf dem
            Übertragungsweg unter Umständen unverschlüsselt sein; bitte übermitteln Sie keine besonders sensiblen Daten.
          </P>

          <H>8. Bewerbungen</H>
          <P>
            Wenn Sie sich bei uns bewerben, verarbeiten wir Ihre personenbezogenen Daten ausschließlich zur Durchführung
            des Bewerbungsverfahrens (Art. 6 Abs. 1 lit. b DSGVO in Verbindung mit § 26 Abs. 1 BDSG). Die Bewerbung
            erfolgt per E-Mail (siehe Hinweis zum Bewerbungsformular oben).
          </P>
          <P>Zu den verarbeiteten Daten zählen in der Regel:</P>
          <UL
            items={[
              "Name und E-Mail-Adresse",
              "Telefonnummer (freiwillig)",
              "Bewerbungsunterlagen (z. B. Anschreiben, Lebenslauf, Zeugnisse)",
              "ggf. weitere freiwillige Angaben",
            ]}
          />
          <P>
            Die Bewerbungsunterlagen werden für die Dauer des Auswahlverfahrens gespeichert und nach dessen Abschluss für
            maximal 6 Monate aufbewahrt (Abwehr möglicher Ansprüche nach dem Allgemeinen Gleichbehandlungsgesetz). Danach
            werden sie gelöscht. Eine darüber hinausgehende Speicherung, etwa in einem Bewerberpool, erfolgt nur mit
            Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Eine Weitergabe an Dritte findet nicht statt.
            Die Angabe der Kontaktdaten ist erforderlich, damit wir Ihre Bewerbung bearbeiten können.
          </P>

          <H>9. Google Maps (Einbettung nach Zustimmung)</H>
          <div id="google-maps" className="scroll-mt-28" />
          <P>
            Auf der Startseite können Sie eine Karte von Google Maps einblenden. Die Karte wird erst geladen, wenn Sie
            auf „Karte laden“ klicken; bis dahin wird keine Verbindung zu Google hergestellt. Mit dem Laden werden Daten
            (insbesondere Ihre IP-Adresse, Browser- und Geräteinformationen sowie die Kartenanfrage) an Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland, übertragen und können an Google LLC in die USA
            übermittelt werden. Google kann dabei Cookies setzen oder auslesen. Rechtsgrundlage ist Ihre Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können sie jederzeit widerrufen, indem Sie die Seite neu
            laden bzw. schließen. Ihre Entscheidung wird nicht gespeichert; bei jedem Besuch wird erneut gefragt.
            Datenschutzerklärung von Google:{" "}
            <a className={link} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
            .
          </P>
          <H>10. Externe Links</H>
          <P>
            Diese Website enthält Links zu externen Angeboten, insbesondere zu Google Maps (Anfahrt) und zur Website der Schwesterfirma IRB Iso-Rüst-Bau GmbH (irb-online.de). Es
            handelt sich ausschließlich um Verweise: Erst wenn Sie einen solchen Link anklicken, wird eine Verbindung zum
            jeweiligen Anbieter hergestellt und dessen Datenschutzerklärung gilt. Auf die Datenverarbeitung dieser
            Anbieter haben wir keinen Einfluss.
          </P>
          <UL
            items={[
              "Google Maps: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland",
              "IRB Iso-Rüst-Bau GmbH, Südring 1, 17509 Lubmin (irb-online.de)",
            ]}
          />

          <H>11. Ihre Rechte</H>
          <P>Sie haben gegenüber uns jederzeit das Recht auf:</P>
          <UL
            items={[
              "Auskunft (Art. 15 DSGVO)",
              "Berichtigung (Art. 16 DSGVO)",
              "Löschung (Art. 17 DSGVO)",
              "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
              "Datenübertragbarkeit (Art. 20 DSGVO)",
              "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
            ]}
          />
          <P>
            <strong>Widerspruchsrecht nach Art. 21 DSGVO:</strong> Soweit wir Daten auf Grundlage berechtigter Interessen
            (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation
            ergeben, jederzeit Widerspruch einlegen.
          </P>

          <H>12. Beschwerderecht bei der Aufsichtsbehörde</H>
          <P>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig für
            uns ist:
          </P>
          <P>
            Der Landesbeauftragte für Datenschutz und Informationsfreiheit Mecklenburg-Vorpommern
            <br />
            Schloss Schwerin, Lennéstraße 1
            <br />
            19053 Schwerin
            <br />
            E-Mail: <a className={link} href="mailto:info@datenschutz-mv.de">info@datenschutz-mv.de</a>
            <br />
            Internet:{" "}
            <a className={link} href="https://www.datenschutz-mv.de" target="_blank" rel="noopener noreferrer">
              www.datenschutz-mv.de
            </a>
          </P>

          <H>13. Speicherdauer</H>
          <P>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist
            oder gesetzlich vorgeschrieben wird (z. B. handels- und steuerrechtliche Aufbewahrungsfristen).
          </P>

          <H>14. Datensicherheit</H>
          <P>
            Der Aufruf dieser Website erfolgt verschlüsselt über HTTPS (TLS). Ob eine Verbindung verschlüsselt ist,
            erkennen Sie am Schloss-Symbol in der Adresszeile Ihres Browsers.
          </P>

          <H>15. Änderungen dieser Erklärung</H>
          <P>
            Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert. Es gilt die jeweils
            hier veröffentlichte Fassung.
          </P>
        </div>
      </section>
    </>
  );
}
