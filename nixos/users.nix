
{ config, pkgs,home-manager, ... }:

{

    users.users.jim = {
    isNormalUser = true;
    description = "jim";
    extraGroups = [ "networkmanager" "input" "wheel" "video" "audio" "tss" ];
    shell = pkgs.zsh;
    packages = with pkgs; [
     
    ];
  };

     home-manager.useUserPackages = true;
     home-manager.useGlobalPkgs = true;
     services.logind.extraConfig = "RuntimeDirectorySize=8G";

#     home-manager.users.jim = import ./home.nix;


}





