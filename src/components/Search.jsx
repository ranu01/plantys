
function Search() {


  return (
    <>
    <div class="bg-green-300 size-auto"> 
        <form>
            <h1 class=" font-medim">New Plant</h1>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price"  placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
      <br>
      </br>
     
    </div>
    <div>
        <h4>Search Plants</h4>
<input type="text" placeholder="Search"/>
      </div>
   </>
  )
}

export default Search