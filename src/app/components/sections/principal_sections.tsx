import styles from "./principal_sections.module.css";
import Image from "next/image";
export default function PrincipalSection(): JSX.Element {
  return (
    <section id={styles.about} className={styles.section}>
      <div className="container">
        <div className={styles.section_title}>
          <div className={styles.logos_card}>
            <Image
              src="/images/logos/betplay.webp"
              alt="La Tribuna"
              width={500}
              height={500}
            />
            <Image
              src="/images/logos/uefa.png"
              alt="La Tribuna"
              width={500}
              height={500}
            />
            <Image
              src="/images/logos/premier.png"
              alt="La Tribuna"
              width={500}
              height={500}
            />
          </div>
          <h2 className={styles.title_primary_section}>
            Únete a nuestra comunidad y disfruta la pasión del futbol
            <strong id={styles.never_ever}> ¡Transmisión gratuita!</strong>
          </h2>
        </div>
      </div>
    </section>
  );
}
