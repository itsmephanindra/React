  <div className="col-4 shadow">

          <label className="mb-2">Name</label>
          <input type='text' className='form-control mb-2' placeholder='Name' value={name}/>

          <label className="mb-2">Email</label>
          <input type='text' className='form-control mb-2' placeholder='Email' value={email}/>

          <label className="mb-2">Age</label>
          <input type='text' className='form-control mb-2'  placeholder='Age' value={age}/>

          <label className="mb-2">Gender</label>
          <input type='text' className='form-control mb-2' placeholder='Gender' value={gender}/>

          <button className="btn btn-success mt-2" onClick={user=>handleUpdate(user)}>Edit User</button>


      </div>