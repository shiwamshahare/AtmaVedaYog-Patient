import React, { useContext } from "react";
import { GiCheckMark } from "react-icons/gi";
import { DirectorsContext } from "../../../../context/DirectorContext/DirectorContext";

const FoundersProfile = () => {
  const { data } = useContext(DirectorsContext);

  // Filtering the founders data where id === 1
  const foundersData = data?.filter((item) => item.id === 1);

  return (
    <div className="w-full">
      {foundersData?.map(({ id, imgSrc, name, title, Profile }) => (
        <div
          key={id}
          className="w-full h-auto flex flex-col space-y-6 pe-12 p-4"
        >
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <img
              src={imgSrc}
              alt={`${name}'s profile`}
              className="w-32 h-32 rounded-full"
            />
            <h3 className="text-2xl font-bold mt-4">{name}</h3>
            <h4 className="text-md text-gray-600">{title}</h4>
          </div>

          <div>
            {/* Profile Section */}
            <h3 className="text-xl font-bold"> Profile:</h3>

            <Experience />

            <hr className="mt-6 border-2 rounded-full" />

            {/* Medical Education */}
            {Profile?.Medical_Education && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold">Medical Education</h4>
                <ol className="mt-4 list-inside space-y-3">
                  {Profile.Medical_Education.map((education, idx) => (
                    <li key={idx} className="text-gray-700 flex gap-2">
                      <span>{idx + 1}. </span>
                      <span className="text-md flex flex-col">
                        <span>{education.Degree}</span>
                        <span>{education.University}</span>
                        <span>{education.Institution}</span>
                        {education.Year && <span>{education.Year}</span>}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <hr className="mt-6 border-2 rounded-full" />

            {/* Spiritual & Yog Education */}
            {Profile?.exploration && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold">
                  Spiritual & Yog Education & Exploration
                </h4>
                <ol className="mt-4 list-decimal list-inside space-y-3">
                  {Profile.exploration.map((explore, idx) => (
                    <li key={idx} className="text-gray-700">
                      {explore}
                    </li>
                  ))}
                  {Profile.learnings && (
                    <ol className="mt-4 ms-6 list-inside space-y-3">
                      {Profile.learnings.map((learning, idx) => (
                        <li key={idx} className="text-gray-700 flex gap-3">
                          <span>{`${String.fromCharCode(97 + idx)}. `}</span>
                          <span>
                            <span className="font-bold">
                              {learning.aashram}
                            </span>{" "}
                            {learning.desc}
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}
                </ol>
              </div>
            )}

            <hr className="mt-6 border-2 rounded-full" />

            {/* Technology */}
            {Profile?.technology && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold">Technology</h4>
                <ol className="mt-4 sm:text-md text-sm list-decimal list-inside space-y-3">
                  {["frontEnd", "backEnd", "database", "ai"].map((techType) => (
                    <li key={techType} className="text-gray-700">
                      {`${techType.charAt(0).toUpperCase() + techType.slice(1)} :`}
                      <ul className="list-inside gap-2 w-full flex flex-wrap ms-8">
                        {Profile.technology[techType]?.map((tech, idx) => (
                          <li key={idx}>{tech},</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <hr className="mt-6 border-2 rounded-full" />

          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-bold mt-12">Work Experience:</h3>
            {Profile?.workExperience && (
              <div className="mt-8 ps-4">
                <ol className="relative border-s-2 border-gray-300 mt-4 list-inside space-y-3">
                  {Profile.workExperience.map((work, index) => (
                    <li key={index} className="mb-10 ms-4">
                      <div
                        className={`absolute w-3 h-3 rounded-full ${index === 7 ? "bg-green-700 animate-pulse" : "bg-gray-500"} -left-[7px] mt-1.5`}
                      />
                      <time className="mb-1 text-sm font-normal leading-none text-gray-700">
                        {work.Years}
                      </time>
                      <h3 className="text-lg font-semibold">
                        {work.Organization}, {work.Position}
                      </h3>
                      <span className="mb-4 text-base font-normal indent-5">
                        {work.Description}
                      </span>
                      {work.lists && (
                        <ol className="mt-2 ms-6 list-decimal list-outside space-y-2">
                          {work.lists.map((list, idx) => (
                            <li
                              key={idx}
                              className="font-normal sm:indent-5 text-md"
                            >
                              {list}
                              {work.subList && (
                                <ul className="font-normal list-outside space-y-2 text-md  ms-6 sm:ms-12">
                                  {idx === 4 &&
                                    work.subList.map((sublist, idx) => (
                                      <li key={idx}>
                                        <span className="font-normal text-md">
                                          {" "}
                                          {`${String.fromCharCode(97 + idx)}. `}
                                        </span>

                                        <span className="font-normal text-md">
                                          {sublist}
                                        </span>
                                      </li>
                                    ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <hr className="mt-6 border-2 rounded-full" />

          {/* Research Expertise, Scope & Achievements */}
          {Profile?.ResearchFocus && (
            <div className="pt-6">
              <h5 className="sm:text-2xl text-xl">
                Research Expertise, Scope & Achievements
              </h5>
              <p className="pt-2">
                I began my research, self-funded though about,
              </p>
              <div className="grid sm:grid-cols-2 ">
                {Profile.ResearchFocus.map((research, idx) => (
                  <ol
                    key={idx}
                    className="flex items-center mt-4 list-outside space-y-2 sm:space-y-3"
                  >
                    <li className="text-md font-normal sm:indent-6">{`${idx + 1}. ${research}`}</li>
                  </ol>
                ))}
              </div>
            </div>
          )}

          <hr className="mt-6 border-2 rounded-full" />

          {/* Scope of Work */}
          {Profile?.Scopes && (
            <div className="pt-6">
              <h5 className="text-2xl">Scope of Work</h5>
              <div className="grid lg:grid-cols-2">
                {Profile.Scopes.map((scope, idx) => (
                  <ol
                    key={idx}
                    className="flex items-center mt-4 list-outside space-y-2 sm:space-y-3 flex-wrap"
                  >
                    <li className="text-md font-normal sm:indent-6">{`${idx + 1}. ${scope}`}</li>
                  </ol>
                ))}
              </div>
              <hr className="mt-6 border-2 rounded-full" />
              <p className="mt-8 text-center tracking-wide">
                <span className="text-lg">Motto</span>:{" "}
                <span className="text-normal">
                  "Where all stop, Yog empowers us to begin"
                </span>
              </p>
            </div>
          )}

          {/* Yog Quote */}
          <div className="text-4xl text-center py-12">
            ll योगः अनुभूते वसुधैव कटुम्बकं ll
          </div>
        </div>
      ))}
    </div>
  );
};

const Experience = () => (
  <div className="mt-8">
    <ul className="list-inside space-y-3 text-gray-700">
      <h2>1. Experience:</h2>
      <li>
        <ul className="mt-4 list-inside space-y-3">
          {[
            "28 yrs. of Clinical medicine.",
            "15 yrs. Hospital management.",
            "15 yrs. in Diagnostic field.",
            "10 yrs. Lab diagnostics.",
          ].map((exp, idx) => (
            <li key={idx} className="flex gap-4 items-center font-normal">
              <GiCheckMark /> {exp}
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h2>2. Integrative Critical Medicine.</h2>
      </li>
      <li>
        <h2>3. 14 yrs. Sanyasa under Master Satguru Janglidas Maharaj.</h2>
      </li>
      <li>
        <h2>4. Founder of Atmavedayog</h2>
      </li>
      <li>
        <h2>5. Invented Yog-E diagnostic model.</h2>
      </li>
      <li>
        <h2>6. Developed 180+ Yog E tests.</h2>
      </li>
      <li>
        <h2>7. Formulated 386 Homeopathic formulations.</h2>
      </li>
      <li>
        <h2>
          8. Extensive work in COVID end stage criticare with AYUSH model
          developed by Atmavedayog.
        </h2>
      </li>
      <li>
        <h2>9. Integrative AYUSH Therapies based on yogic diagnostic model.</h2>
      </li>
    </ul>
  </div>
);

export default FoundersProfile;
