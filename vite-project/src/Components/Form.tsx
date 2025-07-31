import React, { useEffect, useState } from "react";
import type { UserInfo } from "../types/UserInfo";
import "./Form.css";

const skillList: string[] = [
  "React",
  "Vue",
  "Angular",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
];

interface FormProps {
  setUserInfo: (info: UserInfo) => void;
}

const Form = ({ setUserInfo }: FormProps) => {
  const [name, setName] = useState<string>(""); //""보고 ts가 문자열이라고 추론하는데 null, undefiend는 제네릭으로 작성성
  const [email, setEmail] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo({
      name: name,
      email: email,
      introduce: introduce,
      selectedSkills: selectedSkills,
    });
  };

  const handleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };
  useEffect(() => {
    console.log(selectedSkills);
  }, [selectedSkills]);

  return (
    <div className="form-container">
      <h1>Portfilo Form</h1>
      <div className="form-content">
        <form>
          <div>
            <label htmlFor="name">이름을 작성하세요</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">이메일을 작성하세요</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="skills-section">
            <label>사용 기술을 작성하세요</label>
            <div className="skills-buttons">
              {skillList.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkill(skill)}
                  className={selectedSkills.includes(skill) ? "selected" : ""}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label>자기소개를 적어주세요</label>
            <textarea
              placeholder="Introduce yourself"
              value={introduce}
              onChange={(e) => setIntroduce(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="submit-button">
            제출
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
