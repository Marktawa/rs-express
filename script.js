function fetchHello() {
    fetch('/hello')
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => console.error(err));
  }
  