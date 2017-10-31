$( document ).ready(() => {
  const events = [
    {
      name: 'hackathon',
      date: '10/30/17'
    },
    {
      name: 'skipping school',
      date: '10/31/17'
    },
    {
      name: 'christmas',
      date: '12/25/17'
    },
    {
      name: 'nye',
      date: '12/31/17'
    },
    {
      name: 'adams bday',
      date: '01/31/17'
    },
    {
      name: 'something fun',
      date: '11/27/17'
    },
  ];

  for (var i = 0; i < events.length; i++) {
    $('.event-list').append($('<li>'+events[i].name + ' - ' + events[i].date+'</li>'))
  }
});
