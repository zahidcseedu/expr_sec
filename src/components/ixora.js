import styles from "./ixora.module.css";

const skills = [
  "Data Structures", "Algorithms", "OOP", "SOLID", "Design Pattern", "Jira", "Azure",
  "ASP.NET MVC", "jQuery", "Angular", "React.js", "Next.JS", "TypeScript", "PrimeNG",
  "REST APIs", "Entity Framework", "EF Core", "Web API", "Express.js", "Node.js",
  "Project Management", "MS SQL", "PostgreSQL", "MongoDB", "Google Maps", "OSM"
];

export default function Ixora() {
  return (
    <div className={styles.timelineCard}>
      <div className={styles.headerRow}>
        <a
          href="https://ixorasolution.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="iXora Solution Ltd."
        >
          <img src="/ixora-logo.png" alt="Ixora Logo" className={styles.companyLogo} />
        </a>
        <div>
          <a
            href="https://ixorasolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyName}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            iXora Solution Ltd.
          </a>
          <div className={styles.employmentType}>Full-time · 3 yrs 9 mos</div>
          <div className={styles.location}>
            <span className={styles.mapIcon} aria-label="Map">
              {/* SVG Map Pin Icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ verticalAlign: 'middle', marginRight: 6 }} xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15s6-5.686 6-9.5A6 6 0 1 0 2 5.5C2 9.314 8 15 8 15Z" stroke="#b8002e" strokeWidth="1.2" fill="none" />
                <circle cx="8" cy="6" r="2" fill="#b8002e" />
              </svg>
            </span>
            <a
              href="https://www.google.com/maps?sca_esv=6d2e1bcb61b00bbd&output=search&q=ixora+solution&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2aTtVSqS-8espAxkq1fZ3U9sIRL69zKeuDirhjMa-1E_d5o-j4SRKpcxWLkUePm2sYa7NcDbS4r7P9cWLlu6mtGTKoxS2uSejvODUwNxfsq0WBtF4Pw8Ysv53cPXg4POw7-yVTA&entry=mc&ved=1t:200715&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationLink}
            >
              House: M5, Section: 14, Jahangir Tower, 7th Floor, Mirpur, Dhaka
            </a>
          </div>
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineDotWhite}></div>
        <div className={styles.timelineContent}>
          <div className={styles.jobTitle}>Senior Software Engineer</div>
          <div className={styles.jobDuration}>Nov 2021 – Present · 3 yrs 9 mos</div>
          <div className={styles.jobDesc}>
            <ul className={styles.bulletList}>
              <li>As Lead Engineer, built ERP solutions serving 5,000+ users.</li>
              <li>Optimized SQL queries to improve load performance</li>
              <li>Collaborate with juniors and directly handle client requirements</li>
              <li>Flexible working time and friendly working environment</li>
            </ul>
          </div>
          <div className={styles.skillsRow}>
            <span className={styles.skillsLabel}>Skills:</span>
            <span className={styles.skillsList}>
              {skills.join(" · ")}
            </span>
          </div>
          <div className={styles.imageRow}>
            <img src="/tt-champion.jpg" alt="Table Tennis Champion" className={styles.teamImg} />
            <span className={styles.imageLabel}>Table Tennis Champion</span>
            <img src="/my-desk.jpg" alt="My Desk" className={styles.teamImg} />
            <span className={styles.imageLabel}>My Desk</span>
          </div>
        </div>
      </div>
    </div>
  );
}