import { useRouter } from "next/router";
import Link from "next/link";
import styled, { css } from "styled-components";

/**
 * Needs to be wrapped by Link tag
 */
const StyledAnchor = styled.a`
  // NOTE: write your active state here
  ${({ isActive }) =>
    isActive
      ? `
          box-shadow: inset 0 -2.7rem 0 var(--primary-colour-trs);
        `
      : ``}
`;

const NavItems = () => {
  const router = useRouter();
  const navLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
      isActive: true,
    },
    {
      id: 2,
      title: "Portfolio",
      link: "/portfolio",
      isActive: false,
    },
  ];

  console.warn("router.pathName", router.pathname);

  return (
    <>
      <div className="logo">
        <Link href="/" passHref>
          <a>
            <div
              className="logo-img"
              style={{ backgroundImage: `url(/img/logo.png)` }}
              alt="Logo: </et>"
            />
          </a>
        </Link>
      </div>

      {/* NOTE: styled-components components allow for a semantic link between styling and header which include the DX benefit of go to source feature */}
      <div className="header-menu">
        {navLinks.map(({ id, title, link }) => (
          <Link href={link} key={id} passHref>
            <StyledAnchor
              // NOTE: for JSX styling
              className={router.pathname === link ? "isActive" : ""}
              // NOTE: for styled-component component
              isActive={router.pathname === link}
            >
              {title}
            </StyledAnchor>
          </Link>
        ))}
      </div>

      {/* NOTE: If you prefer to style directly with your component logic.
        This does not encourage composability (Use this Link in another react component).
        This styling overwrites Styled-components dur to CSS Specificity
      */}
      <style jsx>{`
        a.is-active {
          box-shadow: inset 0 -2.7rem 0 var(--primary-colour-trs);
        }

        a.is-active:hover {
          box-shadow: inset 0 -1.15rem 0 var(--primary-colour-trs);
        }
      `}</style>
    </>
  );
};

export default NavItems;
