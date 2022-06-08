function index(req, res) {

    res.render('tasks/index');
}

function create(req, res) {

    res.render('tasks/create');
}

function store(req, _res) {
    const data = req.body;
    req.getConnection((_err, conn) => {
        conn.query('INSERT INTO tasks SET ?', [data], (_err, _rows) => {
            console.log(_rows);
       });
    });
}

module.exports = {
    index: index,
    create: create,
    store: store,
}