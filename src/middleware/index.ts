export function checkAuth({ cookies, redirect }) {
  const accessToken = cookies.get("sb-access-token");
  console.log(accessToken);

  if (!accessToken) {
    return redirect("/#");
  }
  return null;
}
