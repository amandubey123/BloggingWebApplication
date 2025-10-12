import { handleError } from "../helpers/handleError.js";
import Category from "../models/category.model.js";

export const addCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const category = new Category({
      name,
      slug,
    });
    await category.save();

    res.status(200).json({
      success: true,
      message: "Category add successfully.",
    });
  } catch (error){
    if (error.code === 11000) {
      // Duplicate key error (slug already exists)
      return res.status(400).json({ message: "Slug already exists. Please use a different category name." });
    }
    console.error("Category Controller Error:", error);
    next(handleError(500, error.message));
  }
};

export const showCategory = async (req, res, next) => {
  try {
    const { categoryid } = req.params;
    const category = await Category.findById(categoryid);
    if (!category) {
      next(handleError(404, "Data not found."));
    }
    res.status(200).json({
      category,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const { categoryid } = req.params;
    const category = await Category.findByIdAndUpdate(
      categoryid,
      {
        name,
        slug,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Category updated successfully.",
      category,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { categoryid } = req.params;
    await Category.findByIdAndDelete(categoryid);
    res.status(200).json({
      success: true,
      message: "Category Delete successfully.",
      })
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const getallCategory = async (req, res, next) => {
  try {
    const category = await Category.find().sort({ name: 1 }).lean().exec();
    res.status(200).json({
      category,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
