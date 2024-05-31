// use https://csvjson.com/csv2json
var pubs = [
  {
    "title": "Increasing Inclusion and Time-Efficiency in Participatory Policy-Making Deliberations with E-Scribing Technology",
    "authors": "Gustavo Umbelino, Kristine Lu, Matthew Easterday",
    "conference": "ICEGOV 2023",
    "details": "International Conference on Theory and Practice of Electronic Governance",
    "link": "https://doi.org/10.1145/3614321.3614349"
  },
  {
    "title": "An Emergent Understanding of Mentor Strategies for Career Development in Emerging Fields",
    "authors": "Gustavo Umbelino, Daniel Rees Lewis, Elizabeth Gerber, Matthew Easterday",
    "conference": "CHI EA 2021",
    "details": "Conference on Human Factors in Computing Systems",
    "link": "https://doi.org/10.1145/3411763.3451800"
  },
  {
    "title": "ProtoTeams: Supporting Team Dating in Co-Located Settings",
    "authors": "Gustavo Umbelino, Matin Yarmand, Samuel Blake, Vivian Ta, Amy Luo, Steven Dow",
    "conference": "CSCW 2020",
    "details": "Conference on Computer-Supported Cooperative Work and Social Computing",
    "link": "https://dl.acm.org/doi/abs/10.1145/3434182"
  },
  {
    "title": "The Persistent Effect of Pre-College Computing Experience on College CS Course Grades",
    "authors": "Christine Alvarado, Gustavo Umbelino, and Mia Minnes",
    "conference": "SIGCSE 2018",
    "details": "Technical Symposium on Computer Science Education, ACM Inroads",
    "link": "https://dl.acm.org/citation.cfm?id=3159508"
  }
]

$().ready(function () {

  for (var i in pubs) {

    var div = document.createElement('div');
    div.setAttribute('class', 'post');

    const gus = 'Gustavo Umbelino';
    const highlight = '<strong>Gustavo Umbelino</strong>';

    div.innerHTML = `
    <strong>
    <a target="_blank" href="${pubs[i].link}">${pubs[i].title}</a>
  </strong><br />${pubs[i].authors.replace(gus, highlight)}<br />${pubs[i].conference}: ${pubs[i].details}
`;

    document.getElementById('pubs').appendChild(div);


  }

});
