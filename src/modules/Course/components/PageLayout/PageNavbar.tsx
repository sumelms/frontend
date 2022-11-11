import { Breadcrumb } from 'flowbite-react';
import React from 'react';
import { HiHome } from 'react-icons/hi';

interface PageNavbarTheme {
  navbar: {
    base: string;
    item: {
      base: string;
    };
  };
}

const PageNavbar: React.FC = () => {
  const theme: PageNavbarTheme = {
    navbar: {
      base: 'flex gap-2',
      item: {
        base: 'flex hover:bg-red-100 hover:text-red-600 rounded-lg items-center justify-center p-3 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
      },
    },
  };

  return (
    <div className="my-8 space-y-8">
      <div>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={theme.navbar.base}>
        <a className={theme.navbar.item.base} href="/">
          Apresentação
        </a>
        <a className={theme.navbar.item.base} href="/">
          Matriz Curricular
        </a>
        <a className={theme.navbar.item.base} href="/">
          Instrição nas turmas
        </a>
        <a className={theme.navbar.item.base} href="/">
          Minhas turmas
        </a>
        <a className={theme.navbar.item.base} href="/">
          Projetos
        </a>
        <a className={theme.navbar.item.base} href="/">
          Fórum de discussão
        </a>
        <a className={theme.navbar.item.base} href="/">
          Alunos do curso
        </a>
      </div>
    </div>
  );
};

export default PageNavbar;
