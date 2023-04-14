import { useState } from "react";

// const defCocktail = {
//   name: "",
//   // description: "",
//   category: "",
//   ingredients: "",
//   imageUrl: "",
//   videoUrl: "",
//   alcohol: null,
//   toolImage: "",
//   toolName: "",
// };

export default function Modal() {
  const [a, setA] = useState<boolean>(false);
  // const [cocktail, setCocktail] = useState(defCocktail);

  function createCocktail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target.description.value);
    // console.log(e.target.category.value);
  }
  return (
    <div>
      <button
        className="bg-blue-500 p-2 w-24 text-white"
        onClick={() => setA(!a)}
      >
        Create +
      </button>
      {a && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Create recipe
                        </h3>
                        <div className="mt-2 ">
                          <form onSubmit={(e) => createCocktail(e)}>
                            <br />
                            <label>Cocktail name</label> <br />
                            <input
                              type="text"
                              name="name"
                              className="bg-slate-400"
                            />
                            <br />
                            <br />
                            <label>Description</label> <br />
                            <textarea
                              name="description"
                              className="bg-slate-400"
                            />
                            <br />
                            <br />
                            <label>Category</label>
                            <br />
                            <input
                              type="text"
                              name="category"
                              className="bg-slate-400"
                            />
                            <br />
                            <br />
                            <label>Ingredients</label>
                            <br />
                            <input
                              type="text"
                              name="ingredients"
                              className="bg-slate-400"
                            />
                            {/* <button onClick={()=>handleAdd()}>Add</button> */}
                            {/* {val.map((data, i)=> (
              return(<input onChange={onChangeHandler})
            ))} */}
                            <br />
                            <br />
                            <label>Photo or image</label>
                            <br />
                            <input
                              // onChange={onChangeHandler}
                              type="file"
                              name="imageUrl"
                              className="bg-slate-400"
                            />
                            <br />
                            <br />
                            <label>Tutorial video</label> <br />
                            <input
                              type="text"
                              name="videoUrl"
                              className="bg-slate-400"
                            />
                            <br />
                            <br />
                            <label>Alcoholic or nonalcoholic</label> <br />
                            <input
                              type="checkbox"
                              name="alcohol"
                              className="bg-slate-400"
                            />
                            <br />
                            <br />
                            <label>Tools</label> <br />
                            <label>Image</label>
                            <input
                              // onChange={onChangeHandler}
                              type="file"
                              name="toolImage"
                              className="ml-4 bg-slate-400"
                            />
                            <br />
                            <label>Name</label>
                            <input
                              // onChange={onChangeHandler}
                              type="text"
                              name="toolName"
                              className="ml-4 bg-slate-400"
                            />
                            <br />
                            <br />
                            <label>Like</label>
                            <label>Comment</label>
                            <button type="submit">Create cocktail</button>
                          </form>
                          {/* <input type="text" className="border w-[200px]" />
                          <input type="text" className="border w-[200px]" />
                          <input type="text" className="border" />
                          <input type="text" className="border" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    >
                      Create
                    </button>
                    <button
                      onClick={() => setA(false)}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
