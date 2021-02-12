/* eslint-disable max-len */
import React from 'react';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

export const CreateProjectHeader = () => {
  return (
    <Svg width="306" height="35" viewBox="0 0 306 35" fill="none">
      <Path d="M13.1634 26.648C10.8354 26.648 8.72335 26.18 6.82735 25.244C4.95535 24.284 3.46735 22.868 2.36335 20.996C1.25935 19.124 0.707351 16.832 0.707351 14.12C0.707351 12.056 1.04335 10.244 1.71535 8.684C2.38735 7.124 3.29935 5.816 4.45135 4.76C5.62735 3.704 6.97135 2.912 8.48335 2.384C10.0194 1.856 11.6394 1.592 13.3434 1.592C14.7114 1.592 15.9714 1.748 17.1234 2.06C18.2754 2.372 19.3554 2.804 20.3634 3.356L20.5074 7.784H20.1474L18.3474 4.904C18.1074 4.448 17.8434 4.04 17.5554 3.68C17.2674 3.296 16.9074 3.008 16.4754 2.816C16.1154 2.648 15.7554 2.528 15.3954 2.456C15.0594 2.36 14.6274 2.312 14.0994 2.312C12.7074 2.312 11.4354 2.684 10.2834 3.428C9.15535 4.172 8.24335 5.408 7.54735 7.136C6.87535 8.84 6.53935 11.18 6.53935 14.156C6.53935 17.108 6.86335 19.448 7.51135 21.176C8.15935 22.88 9.03535 24.104 10.1394 24.848C11.2674 25.568 12.5274 25.928 13.9194 25.928C14.6874 25.928 15.2994 25.88 15.7554 25.784C16.2114 25.664 16.6674 25.496 17.1234 25.28C17.5794 25.088 17.9274 24.812 18.1674 24.452C18.4074 24.068 18.6234 23.66 18.8154 23.228L20.3994 19.7H20.7594L20.6514
      24.848C19.6434 25.376 18.5154 25.808 17.2674 26.144C16.0194 26.48 14.6514 26.648 13.1634 26.648ZM22.2188 26V25.64L22.7588 25.496C23.2388 25.352 23.5628 25.136 23.7308 24.848C23.9228 24.56 24.0188 24.188 24.0188 23.732V12.464C24.0188 11.936 23.9228 11.552 23.7308 11.312C23.5628 11.048 23.2388 10.868 22.7588 10.772L22.2188 10.628V10.268L28.4108 8.18L28.7708 8.54L29.0948 11.636V11.924C29.4308 11.252 29.8628 10.64 30.3908 10.088C30.9428 9.512 31.5428 9.044 32.1908 8.684C32.8628 8.324 33.5228 8.144 34.1708 8.144C35.0828 8.144 35.7788 8.396 36.2588 8.9C36.7388 9.404 36.9788 10.04 36.9788 10.808C36.9788 11.624 36.7388 12.26 36.2588 12.716C35.8028 13.148 35.2508 13.364 34.6028 13.364C33.5948 13.364 32.7068 12.86 31.9388 11.852L31.8668 11.78C31.6268 11.444 31.3508 11.264 31.0388 11.24C30.7268 11.192 30.4388 11.336 30.1748 11.672C29.9348 11.888 29.7308 12.152 29.5628 12.464C29.4188 12.752 29.2748 13.088 29.1308 13.472V23.516C29.1308 24.476 29.5508 25.076 30.3908 25.316L31.5428 25.64V26H22.2188ZM46.4029 8.144C47.9629 8.144 49.2949 8.468 50.3989 9.116C51.5029 9.74 52.3429 10.604 52.9189 11.708C53.5189 12.788 53.8189 14.024 53.8189 15.416C53.8189 15.68 53.8069 15.956 53.7829 16.244C53.7589 16.508 53.7109 16.748 53.6389 16.964H42.9109C42.9349 19.556 43.3909 21.428 44.2789 22.58C45.1909 23.708 46.5349 24.272 48.3109 24.272C49.5109 24.272 50.4829 24.08 51.2269 23.696C51.9709 23.312 52.6669 22.748 53.3149 22.004L53.6749 22.328C52.9309 23.648 51.9349 24.68 50.6869 25.424C49.4629 26.168 47.9869 26.54 46.2589 26.54C44.5549 26.54 43.0429 26.18 41.7229 25.46C40.4029 24.716 39.3709 23.66 38.6269 22.292C37.8829 20.924 37.5109 19.292 37.5109 17.396C37.5109 15.428 37.9429 13.76 38.8069 12.392C39.6709 11 40.7749 9.944 42.1189 9.224C43.4869 8.504 44.9149 8.144 46.4029 8.144ZM46.2949 8.864C45.5989 8.864 44.9989 9.08 44.4949
      9.512C44.0149 9.92 43.6309 10.664 43.3429 11.744C43.0789 12.8 42.9349 14.3 42.9109 16.244H49.0669C49.3069 13.628 49.2109 11.744 48.7789 10.592C48.3469 9.44 47.5189 8.864 46.2949 8.864ZM60.5483 26.54C59.1563 26.54 57.9803 26.144 57.0203 25.352C56.0843 24.56 55.6163 23.42 55.6163 21.932C55.6163 20.804 56.1923 19.772 57.3443 18.836C58.4963 17.876 60.3083 17.156 62.7804 16.676C63.1644 16.604 63.5963 16.532 64.0763 16.46C64.5563 16.364 65.0604 16.268 65.5884 16.172V13.328C65.5884 11.696 65.3844 10.556 64.9763 9.908C64.5923 9.236 63.9803 8.9 63.1403 8.9C62.5644 8.9 62.1083 9.092 61.7723 9.476C61.4363 9.836 61.2203 10.472 61.1243 11.384L61.0523 11.78C61.0043 12.812 60.7523 13.568 60.2963 14.048C59.8403 14.528 59.2763 14.768 58.6043 14.768C57.9803 14.768 57.4643 14.576 57.0563 14.192C56.6483 13.808 56.4443 13.292 56.4443 12.644C56.4443 11.66 56.7803 10.832 57.4523 10.16C58.1483 9.488 59.0603 8.984 60.1883 8.648C61.3163 8.312 62.5403 8.144 63.8604 8.144C65.9963 8.144 67.6403 8.672 68.7923 9.728C69.9684 10.76 70.5564 12.452 70.5564 14.804V22.76C70.5564 23.84 71.0604 24.38 72.0684 24.38H72.8604L73.1844 24.668C72.7284 25.244 72.2244 25.688 71.6724 26C71.1444 26.312 70.3884 26.468 69.4044 26.468C68.3484 26.468 67.5084 26.228 66.8843 25.748C66.2843 25.244 65.8883 24.584 65.6964 23.768C64.9764 24.536 64.2323 25.196 63.4643 25.748C62.7203 26.276 61.7483 26.54 60.5483 26.54ZM62.7444 24.344C63.2243 24.344 63.6683 24.236 64.0763 24.02C64.5083 23.78 65.0123 23.42 65.5884 22.94V16.892C65.3483 16.94 65.1083 16.988 64.8684 17.036C64.6284 17.084 64.3524 17.132 64.0403 17.18C62.9363 17.468 62.0483 17.96 61.3763 18.656C60.7283 19.328 60.4043 20.24 60.4043 21.392C60.4043 22.376 60.6323 23.12 61.0883 23.624C61.5443 24.104 62.0963 24.344 62.7444 24.344ZM80.5852 26.54C79.0492 26.54 77.8492 26.156 76.9852 25.388C76.1452 24.62
      75.7252 23.396 75.7252 21.716V9.404H73.2412V9.044L74.1052 8.9C74.8492 8.732 75.4852 8.492 76.0132 8.18C76.5652 7.868 77.1052 7.448 77.6332 6.92L80.5852 3.644H80.9452L80.8372 8.684H84.8692V9.404H80.8012V22.364C80.8012 23.204 80.9812 23.84 81.3412 24.272C81.7252 24.704 82.2052 24.92 82.7812 24.92C83.2852 24.92 83.7292 24.8 84.1132 24.56C84.4972 24.296 84.8812 23.948 85.2652 23.516L85.6252 23.876C85.1452 24.692 84.4852 25.34 83.6452 25.82C82.8052 26.3 81.7852 26.54 80.5852 26.54ZM95.5035 8.144C97.0635 8.144 98.3955 8.468 99.4995 9.116C100.604 9.74 101.444 10.604 102.02 11.708C102.62 12.788 102.92 14.024 102.92 15.416C102.92 15.68 102.908 15.956 102.884 16.244C102.86 16.508 102.812 16.748 102.74 16.964H92.0115C92.0355 19.556 92.4915 21.428 93.3795 22.58C94.2915 23.708 95.6355 24.272 97.4115 24.272C98.6115 24.272 99.5835 24.08 100.328 23.696C101.072 23.312 101.768 22.748 102.416 22.004L102.776 22.328C102.032 23.648 101.036 24.68 99.7875 25.424C98.5635 26.168 97.0875 26.54 95.3595 26.54C93.6555 26.54 92.1435 26.18 90.8235 25.46C89.5035 24.716 88.4715 23.66 87.7275 22.292C86.9835 20.924 86.6115 19.292 86.6115 17.396C86.6115 15.428 87.0435 13.76 87.9075 12.392C88.7715 11 89.8755 9.944 91.2195 9.224C92.5875 8.504 94.0155 8.144 95.5035 8.144ZM95.3955 8.864C94.6995 8.864 94.0995 9.08 93.5955 9.512C93.1155 9.92 92.7315 10.664 92.4435 11.744C92.1795 12.8 92.0355 14.3 92.0115 16.244H98.1675C98.4075 13.628 98.3115 11.744 97.8795 10.592C97.4475 9.44 96.6195 8.864 95.3955 8.864ZM115.505 34.64C114.545 34.64 113.777 34.4 113.201 33.92C112.649 33.44 112.373 32.828 112.373 32.084C112.373 31.412 112.613 30.872 113.093 30.464C113.573 30.056 114.113 29.852 114.713 29.852C115.313 29.852 115.817 29.972 116.225 30.212C116.633 30.476 116.993 30.848 117.305 31.328L117.557 31.616C118.085 32.336 118.613 32.324 119.141 31.58C119.357
      31.22 119.597 30.74 119.861 30.14C120.149 29.564 120.473 28.784 120.833 27.8L113.849 11.096C113.681 10.64 113.501 10.28 113.309 10.016C113.117 9.728 112.805 9.488 112.373 9.296L111.725 9.044V8.684H120.689V9.008L119.969 9.296C119.441 9.464 119.165 9.74 119.141 10.124C119.141 10.484 119.237 10.94 119.429 11.492L123.173 21.212L126.737 11.384C126.929 10.832 127.001 10.376 126.953 10.016C126.905 9.632 126.605 9.368 126.053 9.224L125.297 9.044V8.684H130.301V9.044L129.509 9.296C128.957 9.464 128.573 9.704 128.357 10.016C128.141 10.328 127.937 10.76 127.745 11.312L121.949 27.116C121.013 29.636 120.077 31.52 119.141 32.768C118.205 34.016 116.993 34.64 115.505 34.64ZM139.473 26.54C137.649 26.54 136.065 26.168 134.721 25.424C133.377 24.656 132.333 23.576 131.589 22.184C130.869 20.792 130.509 19.16 130.509 17.288C130.509 15.416 130.893 13.796 131.661 12.428C132.453 11.06 133.521 10.004 134.865 9.26C136.233 8.516 137.769 8.144 139.473 8.144C141.177 8.144 142.701 8.516 144.045 9.26C145.389 9.98 146.445 11.024 147.213 12.392C148.005 13.76 148.401 15.392 148.401 17.288C148.401 19.184 148.029 20.828 147.285 22.22C146.565 23.588 145.533 24.656 144.189 25.424C142.869 26.168 141.297 26.54 139.473 26.54ZM139.473 25.82C140.313 25.82 140.985 25.58 141.489 25.1C141.993 24.62 142.353 23.768 142.569 22.544C142.809 21.32 142.929 19.592 142.929 17.36C142.929 15.104 142.809 13.364 142.569 12.14C142.353 10.916 141.993 10.064 141.489 9.584C140.985 9.104 140.313 8.864 139.473 8.864C138.633 8.864 137.949 9.104 137.421 9.584C136.917 10.064 136.545 10.916 136.305 12.14C136.089 13.364 135.981 15.104 135.981 17.36C135.981 19.592 136.089 21.32 136.305 22.544C136.545 23.768 136.917 24.62 137.421 25.1C137.949 25.58 138.633 25.82 139.473 25.82ZM156.178 26.54C155.242 26.54 154.378 26.36 153.586 26C152.818 25.64 152.206 25.064 151.75 24.272C151.318
      23.456 151.114 22.388 151.138 21.068L151.246 11.816C151.246 11.264 151.15 10.868 150.958 10.628C150.766 10.388 150.466 10.22 150.058 10.124L149.626 9.98V9.62L156.07 8.36L156.43 8.72L156.25 13.832V22.508C156.25 23.276 156.466 23.84 156.898 24.2C157.354 24.56 157.918 24.74 158.59 24.74C159.262 24.74 159.862 24.644 160.39 24.452C160.918 24.26 161.446 23.972 161.974 23.588L162.118 11.852C162.118 11.3 162.034 10.916 161.866 10.7C161.698 10.46 161.386 10.292 160.93 10.196L160.57 10.088V9.728L166.87 8.36L167.23 8.72L167.122 13.832V23.588C167.122 24.116 167.194 24.524 167.338 24.812C167.482 25.1 167.794 25.34 168.274 25.532L168.634 25.64V26L162.334 26.36L162.01 24.236C161.218 24.884 160.354 25.436 159.418 25.892C158.506 26.324 157.426 26.54 156.178 26.54ZM169.907 26V25.64L170.447 25.496C170.927 25.352 171.251 25.136 171.419 24.848C171.611 24.56 171.707 24.188 171.707 23.732V12.464C171.707 11.936 171.611 11.552 171.419 11.312C171.251 11.048 170.927 10.868 170.447 10.772L169.907 10.628V10.268L176.099 8.18L176.459 8.54L176.783 11.636V11.924C177.119 11.252 177.551 10.64 178.079 10.088C178.631 9.512 179.231 9.044 179.879 8.684C180.551 8.324 181.211 8.144 181.859 8.144C182.771 8.144 183.467 8.396 183.947 8.9C184.427 9.404 184.667 10.04 184.667 10.808C184.667 11.624 184.427 12.26 183.947 12.716C183.491 13.148 182.939 13.364 182.291 13.364C181.283 13.364 180.395 12.86 179.627 11.852L179.555 11.78C179.315 11.444 179.039 11.264 178.727 11.24C178.415 11.192 178.127 11.336 177.863 11.672C177.623 11.888 177.419 12.152 177.251 12.464C177.107 12.752 176.963 13.088 176.819 13.472V23.516C176.819 24.476 177.239 25.076 178.079 25.316L179.231 25.64V26H169.907ZM193.278 34.28V33.92L193.71 33.776C194.598 33.536 195.042 32.96 195.042 32.048V12.464C195.042 11.936 194.946 11.54 194.754 11.276C194.586 11.012 194.262 10.832 193.782 10.736L193.278
      10.628V10.268L199.398 8.18L199.758 8.54L200.082 9.656C200.874 9.176 201.75 8.804 202.71 8.54C203.694 8.276 204.702 8.144 205.734 8.144C207.798 8.144 209.43 8.936 210.63 10.52C211.854 12.08 212.466 14.324 212.466 17.252C212.466 20.132 211.794 22.4 210.45 24.056C209.13 25.712 207.258 26.54 204.834 26.54C202.938 26.54 201.342 26.264 200.046 25.712V31.94C200.046 32.9 200.478 33.5 201.342 33.74L202.026 33.92V34.28H193.278ZM203.106 25.496C204.306 25.496 205.254 24.872 205.95 23.624C206.67 22.376 207.03 20.3 207.03 17.396C207.03 14.492 206.694 12.464 206.022 11.312C205.35 10.136 204.378 9.548 203.106 9.548C202.218 9.548 201.234 9.836 200.154 10.412V24.92C201.066 25.304 202.05 25.496 203.106 25.496ZM213.91 26V25.64L214.45 25.496C214.93 25.352 215.254 25.136 215.422 24.848C215.614 24.56 215.71 24.188 215.71 23.732V12.464C215.71 11.936 215.614 11.552 215.422 11.312C215.254 11.048 214.93 10.868 214.45 10.772L213.91 10.628V10.268L220.102 8.18L220.462 8.54L220.786 11.636V11.924C221.122 11.252 221.554 10.64 222.082 10.088C222.634 9.512 223.234 9.044 223.882 8.684C224.554 8.324 225.214 8.144 225.862 8.144C226.774 8.144 227.47 8.396 227.95 8.9C228.43 9.404 228.67 10.04 228.67 10.808C228.67 11.624 228.43 12.26 227.95 12.716C227.494 13.148 226.942 13.364 226.294 13.364C225.286 13.364 224.398 12.86 223.63 11.852L223.558 11.78C223.318 11.444 223.042 11.264 222.73 11.24C222.418 11.192 222.13 11.336 221.866 11.672C221.626 11.888 221.422 12.152 221.254 12.464C221.11 12.752 220.966 13.088 220.822 13.472V23.516C220.822 24.476 221.242 25.076 222.082 25.316L223.234 25.64V26H213.91ZM238.166 26.54C236.342 26.54 234.758 26.168 233.414 25.424C232.07 24.656 231.026 23.576 230.282 22.184C229.562 20.792 229.202 19.16 229.202 17.288C229.202 15.416 229.586 13.796 230.354 12.428C231.146 11.06 232.214 10.004 233.558 9.26C234.926 8.516 236.462 8.144
      238.166 8.144C239.87 8.144 241.394 8.516 242.738 9.26C244.082 9.98 245.138 11.024 245.906 12.392C246.698 13.76 247.094 15.392 247.094 17.288C247.094 19.184 246.722 20.828 245.978 22.22C245.258 23.588 244.226 24.656 242.882 25.424C241.562 26.168 239.99 26.54 238.166 26.54ZM238.166 25.82C239.006 25.82 239.678 25.58 240.182 25.1C240.686 24.62 241.046 23.768 241.262 22.544C241.502 21.32 241.622 19.592 241.622 17.36C241.622 15.104 241.502 13.364 241.262 12.14C241.046 10.916 240.686 10.064 240.182 9.584C239.678 9.104 239.006 8.864 238.166 8.864C237.326 8.864 236.642 9.104 236.114 9.584C235.61 10.064 235.238 10.916 234.998 12.14C234.782 13.364 234.674 15.104 234.674 17.36C234.674 19.592 234.782 21.32 234.998 22.544C235.238 23.768 235.61 24.62 236.114 25.1C236.642 25.58 237.326 25.82 238.166 25.82ZM253.104 6.272C252.288 6.272 251.604 6.02 251.052 5.516C250.5 4.988 250.224 4.328 250.224 3.536C250.224 2.72 250.5 2.06 251.052 1.556C251.604 1.052 252.288 0.799998 253.104 0.799998C253.92 0.799998 254.604 1.052 255.156 1.556C255.732 2.06 256.02 2.72 256.02 3.536C256.02 4.328 255.732 4.988 255.156 5.516C254.604 6.02 253.92 6.272 253.104 6.272ZM247.776 34.64C246.408 34.64 245.424 34.4 244.824 33.92C244.224 33.464 243.924 32.864 243.924 32.12C243.924 31.448 244.164 30.908 244.644 30.5C245.124 30.092 245.688 29.888 246.336 29.888C246.984 29.888 247.572 30.044 248.1 30.356C248.628 30.692 249.036 31.208 249.324 31.904L249.684 32.696C249.852 32.96 250.044 33.044 250.26 32.948C250.5 32.876 250.62 32.504 250.62 31.832V12.464C250.62 11.912 250.488 11.516 250.224 11.276C249.984 11.012 249.624 10.832 249.144 10.736L248.604 10.664V10.304L255.336 8.18L255.768 8.54L255.66 13.652V23.66C255.66 25.22 255.588 26.528 255.444 27.584C255.324 28.64 255.096 29.528 254.76 30.248C254.448 30.992 253.992 31.676 253.392 32.3C252.552 33.14 251.64 33.74
      250.656 34.1C249.672 34.46 248.712 34.64 247.776 34.64ZM267.477 8.144C269.037 8.144 270.369 8.468 271.473 9.116C272.577 9.74 273.417 10.604 273.993 11.708C274.593 12.788 274.893 14.024 274.893 15.416C274.893 15.68 274.881 15.956 274.857 16.244C274.833 16.508 274.785 16.748 274.713 16.964H263.985C264.009 19.556 264.465 21.428 265.353 22.58C266.265 23.708 267.609 24.272 269.385 24.272C270.585 24.272 271.557 24.08 272.301 23.696C273.045 23.312 273.741 22.748 274.389 22.004L274.749 22.328C274.005 23.648 273.009 24.68 271.761 25.424C270.537 26.168 269.061 26.54 267.333 26.54C265.629 26.54 264.117 26.18 262.797 25.46C261.477 24.716 260.445 23.66 259.701 22.292C258.957 20.924 258.585 19.292 258.585 17.396C258.585 15.428 259.017 13.76 259.881 12.392C260.745 11 261.849 9.944 263.193 9.224C264.561 8.504 265.989 8.144 267.477 8.144ZM267.369 8.864C266.673 8.864 266.073 9.08 265.569 9.512C265.089 9.92 264.705 10.664 264.417 11.744C264.153 12.8 264.009 14.3 263.985 16.244H270.141C270.381 13.628 270.285 11.744 269.853 10.592C269.421 9.44 268.593 8.864 267.369 8.864ZM285.435 26.54C283.803 26.54 282.315 26.192 280.971 25.496C279.651 24.776 278.595 23.744 277.803 22.4C277.035 21.032 276.651 19.364 276.651 17.396C276.651 15.452 277.071 13.796 277.911 12.428C278.775 11.036 279.915 9.98 281.331 9.26C282.771 8.516 284.343 8.144 286.047 8.144C287.439 8.144 288.615 8.372 289.575 8.828C290.535 9.284 291.267 9.884 291.771 10.628C292.275 11.348 292.527 12.104 292.527 12.896C292.527 13.568 292.323 14.096 291.915 14.48C291.507 14.84 290.979 15.02 290.331 15.02C289.635 15.02 289.071 14.768 288.639 14.264C288.207 13.76 287.955 13.1 287.883 12.284C287.859 11.756 287.871 11.312 287.919 10.952C287.967 10.568 287.967 10.184 287.919 9.8C287.823 9.392 287.667 9.128 287.451 9.008C287.259 8.864 286.983 8.792 286.623 8.792C285.159 8.792 284.019 9.428
      283.203 10.7C282.411 11.972 282.015 14 282.015 16.784C282.015 19.208 282.459 21.068 283.347 22.364C284.259 23.636 285.651 24.272 287.523 24.272C288.651 24.272 289.563 24.068 290.259 23.66C290.955 23.252 291.627 22.64 292.275 21.824L292.635 22.112C292.035 23.528 291.111 24.62 289.863 25.388C288.615 26.156 287.139 26.54 285.435 26.54ZM300.745 26.54C299.209 26.54 298.009 26.156 297.145 25.388C296.305 24.62 295.885 23.396 295.885 21.716V9.404H293.401V9.044L294.265 8.9C295.009 8.732 295.645 8.492 296.173 8.18C296.725 7.868 297.265 7.448 297.793 6.92L300.745 3.644H301.105L300.997 8.684H305.029V9.404H300.961V22.364C300.961 23.204 301.141 23.84 301.501 24.272C301.885 24.704 302.365 24.92 302.941 24.92C303.445 24.92 303.889 24.8 304.273 24.56C304.657 24.296 305.041 23.948 305.425 23.516L305.785 23.876C305.305 24.692 304.645 25.34 303.805 25.82C302.965 26.3 301.945 26.54 300.745 26.54Z" fill="url(#paint0_linear)" />
      <Defs>
        <LinearGradient id="paint0_linear" x1="153" y1="-11" x2="153" y2="138" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#001F5A"/>
          <Stop offset="25.3125%" stopColor="#5C6AB5"/>
          <Stop offset="50.3125%" stopColor="#5967B1"/>
          <Stop offset="62.4916%" stopColor="#6E78C6"/>
          <Stop offset="78.4375%" stopColor="#5C6AB5"/>
          <Stop offset="100%" stopColor="#5C7EF5"/>
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
