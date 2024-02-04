
{ config, pkgs,home-manager, ... }:

{

    users.users.jim = {
    isNormalUser = true;
#     isSystemUser = true;
    description = "jim";
    extraGroups = [ "networkmanager" "input" "wheel" "video" "audio" "tss" ];
    shell = pkgs.zsh;
    packages = with pkgs; [
     
    ];
  };

     home-manager.useUserPackages = true;
     home-manager.useGlobalPkgs = true;
     home-manager.users.jim = {
     home.packages = with pkgs; [ 
      spotify
      vscode
      kitty
      firefox
      slack
      google-chrome
      
       ];
     programs.zsh.enable = true;
      programs.zsh.ohMyZsh = {
    enable = true;
    plugins = [ "git" "sudo" "docker" "kubectl" ];
  };
    /* The home.stateVersion option does not have a default and must be set */

    home.username = "jim";
    home.homeDirectory = "/home/jim";
    home.stateVersion = "23.11";

    # Home Manager is pretty good at managing dotfiles. The primary way to manage
    # plain files is through 'home.file'.
    home.file = {
      # # Building this configuration will create a copy of 'dotfiles/screenrc' in
      # # the Nix store. Activating the configuration will then make '~/.screenrc' a
      # # symlink to the Nix store copy.
      # ".screenrc".source = dotfiles/screenrc;

      # # You can also set the file content immediately.
      # ".gradle/gradle.properties".text = ''
      #   org.gradle.console=verbose
      #   org.gradle.daemon.idletimeout=3600000
      # '';
    };

    # Home Manager can also manage your environment variables through
    # 'home.sessionVariables'. If you don't want to manage your shell through Home
    # Manager then you have to manually source 'hm-session-vars.sh' located at
    # either
    #
    #  ~/.nix-profile/etc/profile.d/hm-session-vars.sh
    #
    # or
    #
    #  /etc/profiles/per-user/jim/etc/profile.d/hm-session-vars.sh
    #
    home.sessionVariables = {
      # EDITOR = "emacs";
    };

    # Let Home Manager install and manage itself.
    programs.home-manager.enable = true;
    
    };

    services.logind.extraConfig = "RuntimeDirectorySize=8G";

}





