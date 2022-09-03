import React, { useEffect, useState } from "react";
import { db } from "../../firebse/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import 'animate.css';
import { Link } from "react-router-dom";
 



const SecondBookList = () => {
  const [projects, setProjects] = useState([]);

  function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }


  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProjects(list);

      },
      (error) => {
        console.log(error)
      }
    );

    return () => {
      unsub();
    };

  }, []);


  return (

    <>
      <div class="row  projectsContainer">
        {projects && projects.map((doc,) => {
          return (
            <div class="col-sm-12 col-xs-12 col-md-3" key={doc.id}>
              <div class="thumbnail">
                <Link to="/Details">
                  <img alt="project" src={doc.img} style={{ height: 'auto', width: '100%' }} />
                </Link>
                <div class="caption">
                  <h3>{doc.title}</h3>
                  <p>{doc.client} </p>
                  <p>{truncateString(doc.description , 40)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>


    </>
  );
};

export default SecondBookList;
