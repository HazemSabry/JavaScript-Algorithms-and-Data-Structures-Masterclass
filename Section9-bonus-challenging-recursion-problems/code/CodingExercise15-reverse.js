// reverse

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = (string) => {
  if (string.length === 0) return "";
  return (
    string[string.length - 1] + reverse(string.slice(0, string.length - 1))
  );
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
