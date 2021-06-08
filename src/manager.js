function generateManager(manager) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid p-3 mb-2 bg-secondary text-white">
        <div class="container">
            <h1 class="display-1 text-center">Team Profile</h1>
        </div>
    </div>
    <div class=container>
        <div class="row">
            <div class =col>
                <div class="card" style="width: 15rem;">
                    <div class="card-header p-3 mb-2 bg-danger text-white">
                        <h4 class="text-center">Manager</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${manager.getName()}</h5>
                        <ul>
                            <li>ID: ${manager.getId()}</li>
                            <li>${manager.getOfficeNum()}</li>
                            <li><a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
module.exports = generateManager;