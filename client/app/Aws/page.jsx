import "./aws.css";
import talent from "../../public/talent.json";
import formation from "../../public/formation.json";
import diplome from "../../public/diplome.json";
import competence from "../../public/competence.json";
import Lottiee from "../../components/animations/Animation";
import Header from "@/components/AwsHeader/header.jsx";
import AWS from "../../components/RbkTitle/RbkAws.jsx";
import Cards from "@/components/awsCards/Cards.jsx";
import AwsVideo from "@/components/AwsVideo/aws.jsx";

const Page = () => {
  return (
    <div className="aws-container">
      <section className="image-aws-container">
        <img src="./aws2.png" alt="aws" />
        <Header />
      </section>
      <section className="aws-description-container">
        <AWS />
        <div className="description-container">
          <div className="steps-container">
            <div className="step">
              <Lottiee animation={talent} />
              <p>
                Entrez en contact avec des employeurs et démarrez votre carrière
              </p>
            </div>
            <div className="step">
              <Lottiee animation={formation} />
              <p>
                Accédez à une formation gratuite, immersive et axée sur les
                compétences
              </p>
            </div>
          </div>
    
          <AwsVideo
            src="https://video.wixstatic.com/video/dd4762_08fb877dbb7c4c77b72b62ada7b52a9e/480p/mp4/file.mp4"
            thumbnail="whatiscomputing.png"
          />
          <div className="steps-container">
            <div className="step diplome">
              <Lottiee animation={diplome} />
              <p>
                Obtenir un diplôme avec des compétences prêtes pour l'emploi
              </p>
            </div>
            <div className="step">
              <Lottiee animation={competence} />

              <p>
                Développez des compétences alignées sur la certification AWS
              </p>
            </div>
          </div>
          <div className="btn-container">
            <button className="planining-btn">S'inscrire</button>
          </div>
          <div className="about">
            <h2>
              A propos du programme <span>AWS re/Start</span>
            </h2>
            <div className="content">
              AWS re/Start est un programme de développement des compétences sur
              les fondamentaux des techniques du Cloud computing. Ce programme
              de formation intensif AWS re/Start est délivré par RBK Tunisie.
              L'apprenant sera formé à l'administration et la maintenance des
              systèmes et réseaux avec une spécialisation aux techniques du
              Cloud : installation et maintenance de logiciels et de matériels,
              sécurisation des infrastructures, monitoring, déploiement
              d'applicatifs, techniques DevOps dans l'administration, Cloud AWS.
            </div>
          </div>
        </div>
        <div className="planning">
          <div className="planning-description">
            <h3 className="planning-title">
              Un planning hebdomadaire reconçu pour vous préparer à votre
              <span> future carrière</span>
            </h3>
            <p className="planning-content">
              Grâce à des exercices, des ateliers et des cours basés sur des
              scénarios tirés du monde réel, les apprenants développent leurs
              compétences en Linux, en Python, en réseau, en sécurité et en
              bases de données relationnelles. Il aura l'opportunité de passer
              les certifications propres aux outils, systèmes et logiciels de
              Cloud AWS (Amazon Web Services)
            </p>
          </div>
          <div className="video">
            <img src="./Video.png" alt="video" />
          </div>
        </div>
      </section>
      <section className="programme">
        <h2>À propos du programme</h2>
        <p className="programme-details">
          Le programme AWS re/Start enseigne les principes de base du cloud AWS
          pour aider les apprenants à réussir dans des postes de niveau débutant
          dans le cloud. Grâce à des exercices basés sur des scénarios, des
          ateliers pratiques et des cours, les apprenants acquièrent des
          compétences en Linux, Python, en réseau, en sécurité et en bases de
          données relationnelles.
        </p>
        <Cards />
      </section>
      <section className="critères">
        <div className="criteres-title">
          <h2>Critères d'éligibilité</h2>
          <p>Formation Gratuite et aucun prérequis technique ! Mais…</p>
        </div>
        <div className="about">
          <ul>
            <li>Être âgé(e) de plus de 18 ans.</li>
            <li>
              Aptitude à lire, écrire et communiquer en français et en anglais
            </li>
            <li>
              Posséder le minimum de culture numérique (aucune connaissance en
              programmation n’est requise)
            </li>
            <li>
              Être à la recherche d’un emploi ou d’une nouvelle expérience
              professionnelle.​Être disponible
            </li>
            <li>
              Être disponible, pendant toute la durée du programme (du lundi au
              vendredi, de 9h à 17h)
            </li>
            <li>Aucun engagement professionnel ni académique</li>
            <li>
              Intéressé(e) par le domaine des TICs et prêt(e) à intégrer le
              marché de l’emploi immédiatement suite à la formation
            </li>
          </ul>
        </div>
        <div className="criteres-btn-container">
          <button className="planining-btn">S'inscrire</button>
        </div>
      </section>
    </div>
  );
};

export default Page;
