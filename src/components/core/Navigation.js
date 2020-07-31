import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import switchOn from '../../audio/switch-on.mp3';
import { useDarkMode } from '../../hooks/useDarkMode';

// Context
import AuthContext from '../../context/auth/authContext';

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated, logout } = authContext;

  const [darkMode, toggleMode] = useDarkMode('DarkMode', false);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const spinIcon = e => {
    playaudio();
    e.currentTarget.style = ' ';
    void e.currentTarget.offsetWidth;
    e.currentTarget.style.animation = 'spin 1s';
  };

  const playaudio = () => {
    const audio = document.getElementById('audio');
    audio.play();
  };

  return (
    <header>
      <label className='theme-switch' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={toggleMode}
          checked={darkMode}
        />
        <div className='sun' onClick={spinIcon}>
          {darkMode ? (
            <i className='fas fa-moon'></i>
          ) : (
            <i className='fas fa-sun'></i>
          )}
        </div>
        <audio id='audio' src={switchOn}></audio>
      </label>
      <nav>
        <Link to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 124.187 70'
            id='logo'
          >
            <path
              fill='#4e9838'
              d='M35.072 38.825c.758-5.84 5.172-12.57 5.172-12.57S-1.693 34.88 14.552 62.862c0 0 1.49-14.468 12.92-24.444 0 0-10.757 10.586-10.408 26.835 6.028-5.94 14.677-.787 18.008-26.43'
            />
            <path
              d='M36.507 33.578c-.002.013-.354 3.08-.351 5.945 1.548 3.206 2.515 6.284 2.515 9.57 0 9.794-7.968 17.762-17.763 17.762-9.795 0-17.763-7.968-17.763-17.763 0-6.092 3.32-11.47 7.523-18.282 3.651-5.915 7.67-12.428 10.24-20.738 2.17 7.02 5.376 12.758 8.52 17.936a65.758 65.758 0 012.99-1.138c-4.28-7.014-8.733-15.044-10.37-25.89a1.153 1.153 0 00-2.28 0C17.95 13.024 12.66 21.596 7.992 29.16 3.704 36.106 0 42.107 0 49.091c0 11.531 9.38 20.91 20.908 20.91 11.529 0 20.908-9.38 20.908-20.909 0-5.465-2.268-10.328-5.31-15.514'
              fill='#0c82ff'
            />
            <g>
              <path
                d='M57.086 32.752c.044-.406.177-1.05.37-1.846l2.363-10.148c.192-.847.399-1.643.547-2.1h-3.354c-.015.592-.074 1.083-.222 1.863l-.93 5.048c-.06.271-.163 1.084-.207 1.457-.09.712-.09.712-.119 1.033-.192-1.372-.295-1.93-.413-2.473l-1.197-5.218c-.192-.796-.28-1.27-.34-1.71h-2.63a12.715 14.579 0 01-.325 1.761l-1.182 5.252c-.089.356-.192.965-.414 2.388-.177-1.338-.28-2.134-.325-2.388l-.945-5.15c-.118-.712-.192-1.254-.207-1.864h-3.369c.148.458.355 1.237.562 2.1l2.364 10.166c.221.982.295 1.338.369 1.83h2.94c.045-.458.133-.95.325-1.797l1.094-4.997c.177-.796.354-1.864.443-2.558.148 1.118.266 1.897.414 2.558l1.122 4.98c.148.678.252 1.271.31 1.813zm9.72-6.692c-1.065.034-1.508.051-2.084.119-1.33.136-2.32.491-3.073 1.101-.71.56-1.079 1.406-1.079 2.474 0 .931.28 1.745.813 2.304.59.626 1.433.931 2.556.931 1.211 0 2.039-.288 2.866-1.016v.78h2.866a22.476 22.476 0 01-.103-2.406v-4.575c0-1.524-.414-2.456-1.36-3.049-.576-.356-1.64-.593-2.733-.593-1.433 0-2.526.322-3.324.966-.62.508-.946 1.05-1.241 2.05l2.822.525c.222-.83.724-1.186 1.67-1.186.975 0 1.403.373 1.403 1.186zm0 2.643c0 .508-.193.966-.533 1.305-.399.39-1.064.643-1.67.643-.768 0-1.21-.355-1.21-.965 0-.491.324-.915.856-1.118.606-.22 1.241-.305 2.556-.34zm5.224-6.285h-.532a7.79 7.79 0 01-1.315-.102v2.83a7.81 7.81 0 011.285-.102h.562v5.184c0 1.152.206 1.728.768 2.22.473.406 1.167.592 2.172.592.798 0 1.374-.101 2.039-.339l-.222-2.575c-.37.22-.65.305-1.034.305-.28 0-.517-.068-.68-.186-.192-.153-.266-.39-.266-.864v-4.337h.62c.533 0 .917.034 1.36.102v-2.813c-.458.068-.798.085-1.448.085h-.532v-.356c0-.813.045-1.626.118-2.32h-3.014c.09.796.119 1.473.119 2.32zm14.508 6.116c-.015-.17-.015-.271-.015-.339-.044-.966-.104-1.677-.222-2.22-.517-2.524-2.127-3.964-4.432-3.964-2.822 0-4.699 2.22-4.699 5.574 0 1.677.473 3.117 1.345 4.134.842.965 1.98 1.44 3.428 1.44 1.462 0 2.644-.492 3.487-1.44.413-.475.635-.864.975-1.745l-2.571-.83c-.118.44-.222.627-.443.864a2.004 2.004 0 01-1.493.627c-1.167 0-1.861-.729-2.009-2.101zm-6.604-2.338c.251-1.118.887-1.66 1.936-1.66 1.02 0 1.654.576 1.861 1.66zm14.759-3.778c-.695-.17-.99-.203-1.463-.203-1.345 0-2.231.457-2.955 1.541v-1.338h-2.94c.088.729.118 1.321.118 2.558v5.218c0 1.101-.03 1.711-.118 2.558h3.058c-.089-.813-.118-1.457-.118-2.541v-2.643c.059-.745.162-1.101.443-1.508.429-.61 1.005-.914 1.758-.914.458 0 .828.084 1.507.321zm13.157 10.334c.073-.542.266-1.287.635-2.49l1.433-4.642c.192-.61.34-1.22.665-2.541-.015.254-.015.254-.06 1.152-.029.525-.073 1.796-.073 2.202v3.693c0 1.203-.03 1.847-.118 2.626h2.91c-.088-.677-.118-1.338-.118-2.626V21.3c0-1.135.03-1.83.118-2.643h-3.915c-.089.712-.207 1.254-.547 2.389l-2.201 7.301-2.216-7.301c-.34-1.118-.458-1.66-.562-2.389h-3.9c.074.729.118 1.626.118 2.643v8.826c0 1.152-.03 1.864-.118 2.626h2.91c-.088-.711-.118-1.457-.118-2.626V26.45c0-.898-.059-2.287-.148-3.354.074.237.074.237.237.847.044.135.487 1.71.502 1.796l1.36 4.506c.398 1.287.56 1.914.635 2.507zm9.689-.915l-.31.729c-.222.508-.636.796-1.197.796-.385 0-.665-.085-1.153-.373l-.325 2.694c.813.203 1.374.288 2.024.288 1.685 0 2.748-.728 3.34-2.32l3.383-8.963c.517-1.389.517-1.389.886-2.27h-3.206c-.089.593-.222 1.084-.635 2.253l-1.315 3.846-1.36-3.914c-.31-.914-.502-1.643-.576-2.185h-3.206c.192.424.251.576.887 2.27z'
                fill='#0c82ff'
              />
              <path
                d='M62.073 53.929a19.183 21.995 0 01-.117-2.558v-2.169h2.334c2.866 0 4.55-1.796 4.55-4.811 0-2.948-1.61-4.557-4.535-4.557h-3.236c-.945 0-1.477-.017-2.172-.051.089.796.118 1.558.118 2.473v9.165c0 1-.03 1.762-.118 2.508zm-.117-7.607v-3.608h2.201c1.064 0 1.64.61 1.64 1.778 0 1.17-.606 1.83-1.64 1.83zm7.714-6.488c.088.643.118 1.355.118 2.558v8.979c0 1.22-.03 1.795-.118 2.558h3.088a17.699 20.294 0 01-.119-2.558v-8.98c0-1.151.03-1.846.119-2.557zm10.193 7.403c-1.064.034-1.507.05-2.084.118-1.33.136-2.32.492-3.073 1.102-.709.559-1.078 1.406-1.078 2.473 0 .932.28 1.745.812 2.304.591.627 1.434.932 2.556.932 1.212 0 2.04-.288 2.867-1.017v.78h2.866a22.476 22.476 0 01-.103-2.406v-4.574c0-1.525-.414-2.457-1.36-3.05-.576-.355-1.64-.592-2.733-.592-1.433 0-2.526.321-3.324.965-.62.508-.946 1.05-1.241 2.05l2.822.525c.221-.83.724-1.186 1.67-1.186.974 0 1.403.373 1.403 1.186zm0 2.643c0 .508-.192.965-.532 1.304-.4.39-1.064.644-1.67.644-.768 0-1.211-.356-1.211-.966 0-.491.325-.915.857-1.118.605-.22 1.24-.305 2.556-.339zm7.115 4.049a18.007 20.648 0 01-.118-2.558v-3.423c.636-1.185 1.374-1.778 2.202-1.778.443 0 .783.169.975.474.177.288.236.576.236 1.254v3.473c0 1.033-.03 1.744-.118 2.558h3.073a18.912 21.685 0 01-.118-2.542v-4.252c0-1.338-.251-2.168-.842-2.846-.547-.627-1.36-.949-2.379-.949-1.211 0-2.113.424-3.044 1.44 0-.118.015-.372.015-.474v-.711h-2.94c.089.677.118 1.389.118 2.558v5.218c0 1.05-.03 1.761-.118 2.558zm8.582-10.334h-.532a7.79 7.79 0 01-1.315-.102v2.83A7.81 7.81 0 0195 46.22h.561v5.184c0 1.152.207 1.728.768 2.22.473.406 1.168.593 2.172.593.798 0 1.374-.102 2.04-.34l-.222-2.574c-.37.22-.65.305-1.035.305-.28 0-.517-.068-.68-.187-.191-.152-.265-.39-.265-.864V46.22h.62c.532 0 .916.034 1.36.102V43.51c-.458.068-.798.085-1.448.085h-.532v-.356c0-.813.044-1.627.118-2.321h-3.014c.089.796.118 1.474.118 2.32zm5.185 7.25c.148.814.296 1.22.591 1.694.71 1.119 2.024 1.695 3.886 1.695 1.581 0 2.793-.424 3.502-1.237.487-.542.753-1.355.753-2.253 0-1.22-.458-2.05-1.418-2.592-.517-.305-.975-.458-2.423-.813-1.463-.373-1.773-.543-1.773-1 0-.44.473-.728 1.24-.728.799 0 1.168.304 1.242 1l2.852-.357c-.237-.948-.473-1.44-.96-1.931-.695-.728-1.744-1.084-3.148-1.084-2.467 0-3.96 1.236-3.96 3.27 0 .575.133 1.151.37 1.609.28.508.768.898 1.477 1.203.488.186 1.064.355 2.187.61.813.186 1.005.254 1.212.39a.713.713 0 01.325.61c0 .524-.503.812-1.39.812-.99 0-1.492-.39-1.64-1.27z'
                fill='#4e9838'
              />
            </g>
          </svg>
        </Link>
        <div className='menu-wrap'>
          <input type='checkbox' className='toggler' />
          <div className='hamburger'>
            <div></div>
          </div>
          <div className='menu'>
            <div>
              <div>
                <ul>
                  {isAuthenticated && (
                    <>
                      <li>
                        <Link className='plant-icon' to='/plants'>
                          <i className='fas fa-seedling'></i>My Plants
                        </Link>
                      </li>
                      <li>
                        <Link to='/user'>
                          <i className='fas fa-cog'></i>
                          Settings
                        </Link>
                      </li>
                    </>
                  )}
                  {isAuthenticated ? (
                    <li>
                      <a href='#!' onClick={logout}>
                        <i className='fas fa-sign-out-alt'></i>
                        Logout
                      </a>
                    </li>
                  ) : (
                    <li>
                      <Link to='/login' className='login'>
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;