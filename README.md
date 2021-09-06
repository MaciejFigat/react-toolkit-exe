# This is the log of readux toolkit exploration 
`npm i @reduxjs/toolkit@next react-redux axios`

*installing everything, toolkit in beta version, with axios as my HTTP library*
<!-- DUCKS pattern - one feature one slice of logic contained within one slice of code -->
* src/app
    * hooks.ts - predefined versions of react redux state that already know of the types for our state and dispatch
    * store.ts
    
* features folder for features 
  * counterSlice.ts - for counter feature
`import { createSlice, PayloadAction } from "@reduxjs/toolkit"`
createSlice - main API function to define Redux logic
PayloadAction - ts type - representing this is the contents of one given action object

### Thunks and the new approach


<p>thunks a code pattern that lets me write a asynchronous logic in Redux - encouraged approach
thunk is a middleware that lets the store accept a function as a dispatched thing, lets me write logic that talks with the store ahead of time, without knowing what store it's going to talk to.
Gives me access to dispatch and getState - and says 'do something with it, have fun !'</p>
<p>Typically I would write asynchronous logic in thunks. </p>
Standard would be, 
1. dispatch an action before I made AJAX request,
2. make the request,
3. dispatch a success or failure action based on how the request resolves.

 
<p>redux/toolkit has an API that handles the above -createAsyncThunk</p>
<p></p>
