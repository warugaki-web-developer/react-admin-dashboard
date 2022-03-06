import React, { useRef } from 'react';
import { css } from '@emotion/react';

type DropdownProps = {
  icon?: string;
  badge?: string;
  customToggle?: () => React.ReactNode;
  contentData: {
    icon: string;
    content: string;
  }[];
  renderItems?: (
    item: {
      icon: string;
      content: string;
    },
    index: React.Key,
  ) => React.ReactNode;
  renderFooter?: () => React.ReactNode;
};

const DropdownStyle = css`
  & {
    position: relative;
    z-index: 99;
  }

  .dropdown__toggle {
    position: relative;
  }

  .dropdown__toggle > i {
    font-size: 2.5rem;
    color: var(--txt-color);
  }

  .dropdown__toggle-badge {
    position: absolute;
    top: -12px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    font-size: 0.8rem;
    color: var(--txt-white);
    background-color: var(--main-color);
    border-radius: 50%;
  }

  .dropdown__content {
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    width: max-content;
    max-width: 400px;
    overflow: hidden;
    background-color: var(--main-bg);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease 0s;
    transform: scale(0);
    transform-origin: top right;
  }

  .dropdown__content.active {
    transition: transform 0.5s var(--transition-cubic);
    transform: scale(1);
  }

  .dropdown__footer {
    padding: 20px;
    text-align: center;
  }

  .dropdown__footer a:hover {
    color: var(--main-color);
  }
`;

const clickOutsideRef = (
  contentRef: React.MutableRefObject<null>,
  toggleRef: React.MutableRefObject<null>,
) => {
  document.addEventListener('mousedown', (e) => {
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle('active');
    } else if (contentRef.current && !contentRef.current.contains(e.target)) {
      contentRef.current.classList.remove('active');
    }
  });
};

const Dropdown = ({
  icon,
  badge,
  customToggle,
  contentData,
  renderItems,
  renderFooter,
}: DropdownProps) =>
  // eslint-disable-next-line arrow-body-style
  {
    const dropdownToggleEl = useRef(null);
    const dropdownContentEl = useRef(null);

    clickOutsideRef(dropdownContentEl, dropdownToggleEl);

    return (
      <div className="dropdown" css={DropdownStyle}>
        <button
          ref={dropdownToggleEl}
          type="button"
          className="dropdown__toggle"
        >
          {icon && <i className={icon} />}
          {badge && <span className="dropdown__toggle-badge">{badge}</span>}
          {customToggle && customToggle()}
        </button>
        <div ref={dropdownContentEl} className="dropdown__content">
          {contentData && renderItems
            ? contentData.map((item, index) => renderItems(item, index))
            : ''}
          {renderFooter ? (
            <div className="dropdown__footer">{renderFooter()}</div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  };

Dropdown.defaultProps = {
  icon: undefined,
  badge: undefined,
  customToggle: undefined,
  renderItems: undefined,
  renderFooter: undefined,
};

export default Dropdown;
