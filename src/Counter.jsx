import { useState } from "react";

const Counter = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [age, setAge] = useState();
  const [college, setCollege] = useState("");
  const [birthplace, setbirthplace] = useState("");
  const [hobby, sethobby] = useState("");
  const [internplace, setInternplace] = useState("");
  const [comment, setComment] =useState("");
  const [facuilty, setFacuilty] =useState("");
  const [level, setLevel] =useState("");

  const handlefNameChange = (event) => {
    setfName(event.target.value);
  };
  const handlelNameChange = (event) => {
    setlName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleCollegeChange = (event) => {
    setCollege(event.target.value);
  };
  const handleBirthplaceChange = (event) => {
    setbirthplace(event.target.value);
  };
  const handlehobbyChange = (event) => {
    sethobby(event.target.value);
  };
  const handleInternplaceChange = (event) => {
    setInternplace(event.target.value);
  };

  const handleComment=(event)=>{
    setComment(event.target.value);
  }

  const handleFacuiltyChange=(event)=>{
    setFacuilty(event.target.value);
  }
  const handleLevelChange=(event)=>{
    setLevel(event.target.value);
  }

  

  return (
    <div className="container">
      <h2>Application form</h2>
      <div className="Name">
        <section>First Name :</section>
        <input
          className="nameInput"
          value={fname}
          onChange={handlefNameChange}
        />
      </div>
      <div className="Name">
        <section>Last Name :</section>
        <input
          className="nameInput"
          value={lname}
          onChange={handlelNameChange}
        />
      </div>
      <div className="Age">
        <section>Age :</section>
        <input className="ageInput" value={age} type="number" onChange={handleAgeChange} />
      </div>
      <div className="college">
        <section>School/College :</section>
        <input
          className="collegeInput"
          value={college}
          onChange={handleCollegeChange}
        />
      </div>

      <div>
        <span>Facuilty :</span>
        <br/>
        <label>
            <input type="radio" value="science" checked={facuilty==="science"} onChange={handleFacuiltyChange}/>
            science<br/>
        </label>
        
        <label>
        <input type="radio" value="huminity" checked={facuilty==="huminity"} onChange={handleFacuiltyChange}/>
            huminity<br/>
        </label>
        <label>
        <input type="radio"value="managemenet" checked={facuilty==="managemenet"} onChange={handleFacuiltyChange}/>
            managemenet<br/>
        </label>
        <label>
        <input type="radio" value="education" checked={facuilty==="education"} onChange={handleFacuiltyChange}/>
           education
        </label>
      </div>


      <div>
        <span>Grade level</span><br/>
        <select value={level} onChange={handleLevelChange}>
          <option value="" >select the grade level</option>
          <option value="Freshman" >Freshman</option>
          <option value="Sophomore" >Sophomore</option>
          <option value="Junior" >Junior</option>
          <option value="Senior" >Senior</option>
          <option value="Graduate">Graduate</option>
        </select>
      </div>

      <div className="birthplace">
        <section>Birth Place :</section>
        <input value={birthplace} onChange={handleBirthplaceChange} />
      </div>
      <div className="hobby">
        <section>Hobby/ Interests :</section>
        <input value={hobby} onChange={handlehobbyChange} />
      </div>
      <div className="intern">
        <section>Interships at :</section>
        <input value={internplace} onChange={handleInternplaceChange} />
      </div>

      <div>
        <textarea className="comment" value={comment} placeholder="leave a comment" onChange={handleComment}/>
      </div>

      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Self Introduction Essay
      </h2>
      <p>
        Hello and welcome to a small chapter of my story. I am <strong>{fname} {lname}</strong>,
        of {age} years old, currently a student at <strong>{college}</strong>. I had taken <strong>{facuilty}</strong> Facuilty  Born and raised in{" "}
        <strong>{birthplace}</strong>, I am shaped by the values and culture of my hometown. Here currently I am holding my <strong>{level}</strong> position. This
        essay is a canvas where I paint a picture of who I am, my interests,
        achievements, and my dreams for the future.
      </p>
      <p>
        Beyond academics, my interests include {""}
        {hobby}. These activities not only provide me with enjoyment but also
        contribute to my personal growth, teaching me skills like teamwork, time
        management, and resilience.
      </p>
      <p>
        I had internships with {internplace}. with broad knowlege of marketing
        strategies and techniques.
      </p>

      <p>Comment: {comment}</p>
    </div>
  );
};

export default Counter;
