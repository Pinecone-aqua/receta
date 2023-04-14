import { useState } from "react"

const defCocktail = {
  name: "",
  // description: "",
  category: "",
  ingredients: "",
  imageUrl: "",
  videoUrl: "",
  alcohol: null,
  toolImage: "",
  toolName: "",
}

export default function Recipe(): JSX.Element {
  const [cocktail, setCocktail] = useState(defCocktail)
  // const [val, setVal] = useState();
  // const handleAdd=()=> {
  //   const one=[...val,[]]
  //   setVal(one)
  // }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void{
    setCocktail({ ...cocktail, [e.target.name]: e.target.value})
  }
  console.log(cocktail)

  function createCocktail(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(cocktail)
  }

  return (
    <div>
      <form onSubmit={(e) => createCocktail(e)}>
        <br />
          <label>Cocktail name</label> <br />
            <input onChange={onChangeHandler} type="text" name="name" className="bg-slate-400" />
        <br />
        <br />
          <label>Description</label> <br />
            <textarea onChange={onChangeHandler} name="description" className="bg-slate-400" />
        <br />
        <br />
          <label>Category</label><br />
            <input onChange={onChangeHandler} type="text" name="category" className="bg-slate-400" />
        <br />
        <br />
          <label>Ingredients</label><br />
            <input onChange={onChangeHandler} type="text" name="ingredients" className="bg-slate-400" />
            {/* <button onClick={()=>handleAdd()}>Add</button> */}
            {/* {val.map((data, i)=> (
              return(<input onChange={onChangeHandler})
            ))} */}
        <br />
        <br />
          <label>Photo or image</label><br />
            <input onChange={onChangeHandler} type="file" name="imageUrl" className="bg-slate-400" />
        <br />
        <br />
          <label>Tutorial video</label> <br />
            <input onChange={onChangeHandler} type="text" name="videoUrl" className="bg-slate-400" />
        <br />
        <br />
          <label>Alcoholic or nonalcoholic</label> <br />
            <input onChange={onChangeHandler} type="checkbox" name="alcohol" className="bg-slate-400" />
        <br />
        <br />
          <label>Tools</label> <br />
            <label>Image</label>
            <input onChange={onChangeHandler} type="file" name="toolImage" className="ml-4 bg-slate-400" /><br />
            <label>Name</label>
            <input onChange={onChangeHandler} type="text" name="toolName" className="ml-4 bg-slate-400" />
        <br />
        <br />
        <label>Like</label>
        <label>Comment</label>
        <button type="submit">Create cocktail</button>
      </form>
    </div>)
}

// export interface inputType = {
//   type: string,
//   placeholder: string,
//   onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
// }

// interface CocktailType {
//   name: string;
//   description: string;
//   category: string;
//   ingredients: string;
//   imageUrl: string;
//   videoUrl: string;
//   alcohol: boolean;
//   toolImage: string;
//   toolName: string;
// }