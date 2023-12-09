import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.title}>About Me</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a scelerisque mi. Proin vel suscipit ipsum, quis laoreet velit. Vestibulum justo neque, ultricies in justo sit amet, viverra imperdiet massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi non mauris quis felis fringilla facilisis.</p>
      <p>Suspendisse nunc purus, vulputate sed dolor vel, elementum posuere nunc. Cras tempus dictum justo, at ultrices enim porttitor nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer porttitor dolor vel ipsum gravida hendrerit nec ut odio. Quisque id euismod ante, quis scelerisque diam. Nam tincidunt finibus massa, nec consectetur urna fringilla a.</p>
    </div>
  );
}

export default About;