$.ajax({

    type:'get',
    url:'https://api.covid19api.com/summary',
    success:function(response)
    {
        console.log(response.Countries);

        for(var i=0 ; i<response.Countries.length; i++)
        {
            var toatlactive=response.Countries[i].TotalConfirmed-response.Countries[i].TotalRecovered;
            var tablerow = `<tr><td>${response.Countries[i].Country}</td> <td>${response.Countries[i].TotalConfirmed}</td> <td>${toatlactive}</td><td>${response.Countries[i].TotalRecovered}</td><td>${response.Countries[i].TotalDeaths}</td></tr>`
            $('#tbody').append(tablerow);  


        }
        $('#covidtable').DataTable()

    },
    error:function(error)
    {
        console.log(error);
    }

})