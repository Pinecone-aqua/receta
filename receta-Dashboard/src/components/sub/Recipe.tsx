export default function Recipe(): JSX.Element {
  return (
    <div>
      <form>
        <label>Cocktail name</label>
          <input type="text" name="name" className="bg-slate-400" />
        <label>Description</label>
          <input type="text" name="description" className="bg-slate-400" />
        <label>Category</label>
          <input type="text" name="category" className="bg-slate-400" />
        <label>Ingredients</label>
          <input type="text" name="ingredients" className="bg-slate-400" />
        <label>Photo or image</label>
          <input type="file" name="image_url" className="bg-slate-400" />
        <label>Tutorial video</label>
          <input type="file" name="video_url" className="bg-slate-400" />
        <label>Like</label>
        <label>Alcoholic or nonalcoholic</label>
          <input type="checkbox" name="alcohol" className="bg-slate-400" />
        <label>Comment</label>
        <label>Tools</label>
          <input type="text" name="image" className="bg-slate-400" />
          <input type="text" name="name" className="bg-slate-400" />
        <label>Tutorial video</label>
          <input type="file" name="video_url" className="bg-slate-400" />
      </form>
    </div>)
}
