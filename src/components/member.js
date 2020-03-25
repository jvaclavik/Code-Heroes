import React, { useRef } from "react"
import Image from "./image"
import FlipCard from "./flipCard"

const Member = ({
  name,
  masterSkill,
  secondarySkill,
  skills,
  avatar,
  links,
  scrollPosition,
}) => {
  const cardRef = useRef()

  const toggle = () => {
    cardRef.current.toggleFlip()
  }

  return (
    <div className="col-md-4">
      <div style={{ position: "relative" }}>
        <FlipCard
          ref={cardRef}
          FrontSide={() => (
            <div className="member member-frontside">
              <div className="member-avatar-container">
                <div className="member-avatar">
                  <Image
                    src={avatar}
                    alt={name}
                    scrollPosition={scrollPosition}
                  />
                </div>
              </div>
              <h3>{name}</h3>
              <div className="member-desc">
                {masterSkill} <br></br>
                {secondarySkill}
              </div>
              <div className="flip-arrow" role="button" onClick={toggle}>
                <Image
                  src={require("../images/arrow-right.svg")}
                  alt="Flip card"
                />
              </div>
            </div>
          )}
          BackSide={() => (
            <div className="member member-backside">
              <h3>{name}</h3>
              {skills && (
                <div className="member-desc">
                  <ul>
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="member-links">
                {links.map(({ href, title }) => (
                  <a key={title} href={href}>
                    {title}
                  </a>
                ))}
              </div>
              <div className="flip-arrow" role="button" onClick={toggle}>
                <Image
                  src={require("../images/arrow-left.svg")}
                  alt="Flip card"
                />
              </div>
            </div>
          )}
        />
        <div className="flip-hitslop" role="button" onClick={toggle}></div>
      </div>
    </div>
  )
}

export default Member
