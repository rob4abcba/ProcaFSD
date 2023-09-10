fetch("companies.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (companies) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let company of companies) {
      out += `
            <tr>
                <td><img src='${company.company_name}'></td>
                <td><img src='${company.img_src}'></td>
                <td><img src='${company.about}'></td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
  });
