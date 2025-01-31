export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
    <p className="text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Pitung. All rights reserved.
    </p>
  </footer>
  );
}
