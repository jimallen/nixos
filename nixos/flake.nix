{
  description = "Jim's NixOS Configuration";

  inputs = {
      nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
      rust-overlay.url = "github:oxalica/rust-overlay";
      home-manager = {
          url = "github:nix-community/home-manager";
          inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { nixpkgs, home-manager, ... } @ inputs:
  {
    nixosConfigurations.nixos-x1 = nixpkgs.lib.nixosSystem {
      specialArgs = { inherit inputs; };
      system = "x86_64-linux";
      modules = [
        ./configuration.nix
        ./hardware-configuration.nix
        # ./fingerprint-scanner.nix
        ./sound.nix
        ./usb.nix
        ./time.nix
        ./swap.nix
        ./bootloader.nix
        ./nix-settings.nix
        ./nixpkgs.nix
        ./gc.nix
        ./auto-upgrade.nix
        ./linux-kernel.nix
        ./screen.nix
        ./display-manager.nix
        ./theme.nix
        ./internationalisation.nix
        ./fonts.nix
        ./security-services.nix
        ./services.nix
        # ./printing.nix
        # ./gnome.nix
        ./hyprland.nix
        ./environment-variables.nix
        ./bluetooth.nix
        ./networking.nix
        # ./mac-randomize.nix
        # ./open-ssh.nix
        ./firewall.nix
        ./dns.nix
        # ./vpn.nix
        ./users.nix
        # ./virtualisation.nix
        ./programming-languages.nix
        ./lsp.nix
        ./rust.nix
        ./wasm.nix
        ./info-fetchers.nix
        ./utils.nix
        ./terminal-utils.nix

         home-manager.nixosModules.home-manager
          {
            home-manager.useGlobalPkgs = true;
            home-manager.useUserPackages = true;
            home-manager.users.jim = import ./home.nix;

            # Optionally, use home-manager.extraSpecialArgs to pass
            # arguments to home.nix
          }
        

      ]; #end modules
    };
  };
}
