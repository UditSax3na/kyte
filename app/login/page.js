'use client'
import React from 'react'
import './style/page.css'

const Login = () => {
  const showlabel=(event)=>{
    event.target.parentNode.lastChild.classList.toggle('hidden')
    // 
  }
  return (
    <main className="formdiv rounded-xl p-4 border-2 border-white border-solid">
      <form method="" className='formcon'>
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" id='name' required />
          <label for="Name" class="form__label">Name</label>
        </div>
        <div class="form__group field">
          <input type="password" class="form__field" placeholder="Name" id='password' required />
          <label for="password" class="form__label">Password</label>
        </div>
        <button className="btn mt-8 bg-blue-800 hover:bg-blue-400 rounded-xl pl-3 pr-3 p-2 text-white">Login</button>
      </form>
    </main>
  )
}

export default Login