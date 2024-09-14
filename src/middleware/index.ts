import { supabase } from "../lib/supabase"; // pastikan ini adalah path yang sesuai

// Handle sign-in submission
async function handleSignIn(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error("Error signing in:", error.message);
  } else {
    // Redirect to dashboard after successful login
    window.location.href = "/#";
  }
}
