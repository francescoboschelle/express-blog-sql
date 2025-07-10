import e from "express";
import postsController from "../controllers/posts-controller.js";

const router = e.Router();

router.get("/", postsController.index);

router.get("/:id", postsController.show);

router.post("/", postsController.store);

router.put("/:id", postsController.update);

router.patch("/:id", postsController.modify);

router.delete("/:id", postsController.destroy);

export default router;
