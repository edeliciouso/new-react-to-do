import React from 'react'
import { TodoWrapper } from './TodoWrapper'
import { Link } from 'react-router-dom';
import ProfilePicture from './ProfilePicture'

function TodoPic() {
  return (
    <div>
        <Link to="/profile"> {/* Link to profile page */}
          <ProfilePicture /> {/* Render the profile picture component */}
        </Link>
        <div>
            <TodoWrapper/>
        </div>
    </div>
  )
}

export default TodoPic