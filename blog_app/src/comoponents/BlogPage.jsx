import { Button, TextField } from '@mui/material'
import React from 'react'

const BlogPage = () => {
  return (
    <div>
      <div className="container">
       <div className="homecontainer"><br /><br />
        <h1>
          Add Details
        </h1>
       <TextField id="outlined-basic" label="BlogName" variant="outlined" /><br /><br />
       <TextField id="outlined-basic" label="Description" variant="outlined" /><br /><br />
       <TextField id="outlined-basic" label="AuthorName" variant="outlined" /><br /><br />
       <Button variant="contained">Submit</Button>
       </div>
      </div>
    </div>
  )
}

export default BlogPage
