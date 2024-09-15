const simplifyPath = (path) => {
  const stack = [];
  const directories = path.split("/");

  for (let dir of directories) {
    if (dir === "." || !dir) continue;

    if (dir === "..") {
      if (stack.length > 0) stack.pop();

      continue;
    }

    stack.push(dir);
  }

  return "/" + stack.join("/");
};

console.log(simplifyPath("///eHx/.."));
console.log(simplifyPath("/hello../world"));
console.log(simplifyPath("/..hidden"));
console.log(simplifyPath("/.."));
console.log(simplifyPath("/."));
console.log(simplifyPath("/a//b////c/d//././/.."));
console.log(simplifyPath("/home/.../user/./Documents//../Pictures/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/a/../../b/../c//.//"));
