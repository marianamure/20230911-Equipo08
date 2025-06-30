// ...existing code...
interface CategoryProjectProps {
  text: string;
  color?: string;
}

const CategoryProject = ({
  text,
  color = "bg-green",
}: CategoryProjectProps) => {
  return (
    <span
      className={`uppercase border-2 border-black px-4 py-2 rounded-full font-bold w-fit font-redHat min-w-28 text-center ${color}`}
    >
      {text}
    </span>
  );
};

export default CategoryProject;
