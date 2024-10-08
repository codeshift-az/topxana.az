export const getPageTitle = (title: string) => {
  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME as string;
  return `${title} | ${PROJECT_NAME}`;
};
