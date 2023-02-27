import React from 'react';

const List = (props) => {
  const {people} = props;
  return (
    <>
      {people.map((person)=>{
        return <article className='person' key={person.id}>
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
        </article>
      })}
    </>
  );
};

export default List;
