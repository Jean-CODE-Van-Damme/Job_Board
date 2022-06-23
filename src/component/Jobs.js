import Job from "./Job";

const Jobs = (props) => {
  return (
    <>
      <div class="large_div">
        <div className="annonce red">
          <Job
            title={"Agent de Sécurité - Pantin"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        </div>

        <div className="annonce green">
          <Job
            title={"Responsable d'Atelier (H/F)"}
            contractType={"CDD"}
            country={"France"}
            city={"Paris"}
          />
        </div>

        <div className="annonce yellow">
          <Job
            title={"Chef de Projet"}
            contractType={"CDD"}
            country={"France"}
            city={"Paris"}
          />
        </div>

        <div className="annonce blue">
          <Job
            title={"Développeur React.js"}
            contractType={"CDI"}
            country={"France"}
            city={"Paris"}
          />
        </div>

        <div className="annonce pink">
          <Job
            title={"Sales Associate Stockholm"}
            contractType={"CDI"}
            country={"Suède"}
            city={"Stockholm"}
          />
        </div>

        <div className="annonce red">
          <Job
            title={"Vendeur/se - Crans Montana"}
            contractType={"CDI"}
            country={"Suisse"}
            city={"Crans-Montana"}
          />
        </div>

        <div className="annonce green">
          <Job
            title={"CRM & Data Quality Analyst"}
            contractType={"CDI"}
            country={"USA"}
            city={"New-York"}
          />
        </div>
        <div className="annonce yellow">
          <Job
            title={"Infirmier(H/F"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        </div>
        <div className="annonce blue">
          <Job
            title={"Infirmier(H/F"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
