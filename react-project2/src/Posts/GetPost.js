function GetPost({ title, showTitle }) {
  return (

      <div className="col-3 mt-4">
        <div className="card shadow">
          <p>{title}</p>
          
          <div className="col-1">
            <button
              className="btn btn-primary"
              onClick={(e) => showTitle(title)}
            >
              Select
            </button>
          </div>
        </div>
      </div>

  );
}

export default GetPost;
