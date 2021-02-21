const router = require("express").Router();
const { Users, Tasks, Kids } = require("../models");

// GET /api/users
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/", (req, res) => {
  let parentCard = [
    {
      userId: "brdy",
      parentName: "braudy",
      parentEmail: "g",
    },
  ];
  let childCard = [
    {
<<<<<<< HEAD
      userId: "a",
      childName: "a",
      totalPoints: "a",
      taskPoints: [12],
      taskName: [11],
      taskId: "e",
=======
      userId: "",
      childName: "",
      totalPoints: "",
      taskints: [],
      taskName: [],
      taskId: "",
>>>>>>> 7b437669faca0c1f6b3cd11d6dd2c4b859413937
    },
    {
      userId: "q",
      childName: "w",
      totalPoints: "e",
      taskPoints: [14],
      taskName: [55],
      taskId: "g",
    },
    {
      userId: "h",
      childName: "h",
      totalPoints: "h",
      taskPoints: [55],
      taskName: [5],
      taskId: "g",
    },
  ];

  res.render("index", {
    childCard: childCard,
    parentCard: parentCard,
  });
  
/// double check this change works...
  // Access our User model and run .findAll() method)
  // Users.findAll()
  //   .then((dbUserData) => res.json(dbUserData))
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
});

// GET /api/users/1
router.get("/:id", (req, res) => {
  Users.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// POST /api/users
router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234', role:"Uncle"}
  Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/users/1
router.put("/:id", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234', role: 'Uncle'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Users.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;